import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useAccount } from "wagmi";
import { useState, useEffect } from "react";
import Web3 from "web3";
import abi from '../../sc/abi.json';
import ca from '../../sc/ca';
export default function SubClaimPage({ val, setVal }) {
    const { address, status } = useAccount();
    const [_totalSupply, setTotalSupply] = useState(null);
    const claim = async () => {
        try {
            const provider = window.ethereum;
            const web3 = new Web3(provider);
            await Balanc();
        }
        catch (err) {
            console.log(err);
        }
    }
    async function Balanc() {
        const rpc = new Web3("https://sepolia.base.org");
        var returnBalance;
        const dec = 1 * 10 ** 18;
        const contract = await new rpc.eth.Contract(abi, ca);
        try {
            await contract.methods.Balance(address).call()
                .then((res) => {
                    returnBalance = Number(res) / dec;
                    setVal(returnBalance);
                })
                .catch((err) => {
                    returnBalance = 0;
                    console.log(err);
                    setVal(returnBalance);
                }
                );
        }
        catch (err) {
            setVal(0);
            console.log(err);
        }
    }
    const burn = async () => {
        const provider = window.ethereum;
        const web3 = new Web3(provider);
        const contract = await new web3.eth.Contract(abi, ca);
        try {
            await contract.methods.Burn(1000).send({ from: address })
            await Balanc();
        }
        catch (err) {
            console.log(err);
        }
    }
    const totalSupply = async () => {
        const rpc = new Web3("https://sepolia.base.org");
        let _totalSupply_;
        const dec = 1 * 10 ** 18;
        const contract = await new rpc.eth.Contract(abi, ca);
        try {
            await contract.methods.totalSupply().call().then((res) => {
                _totalSupply_ = Number(res) / dec;
                setTotalSupply(_totalSupply_)
            })
        }
        catch (err) {
            //nothing catch :}}}}} !
        }
    }
    useEffect(() => {
        totalSupply();
        Balanc();
    }, [val])
    return (
        <div>
            <div className="tota-supp">
                <div className="tota-supp-text">TOTAL SUPPLY OF FLIP TOKEN:</div>
                <div className="tota-supp-num">{_totalSupply}</div>
            </div>
            <div className="sub-claim">
                <div className="sub-claim-head">Claim flip'it token</div>
                <div className="sub-claim-token"
                    onClick={claim}
                >
                    <div>GET</div>
                    <div>5000 STR</div>
                </div>
                <div>
                </div>
                <div className="sub-burn-head">Burn Flip'it token</div>
                <div className="sub-burn-token" onClick={
                    () => {
                        val > 1000 ? burn : alert("Insufficient Token!")
                    }
                }>
                    <div>BURN</div>
                    <div>1000 STR</div>
                </div>
                <div>
                </div>
                <div className='home-txt-rt'>
                    <Link to='/' id="rt"> back to Game </Link>
                </div>
            </div>
            <div className="ca">
                <div className="ca-adtxt">CONTRACT ADDRESS :</div>
                <div className="ca-ad">{ca}</div>
            </div>
        </div>
    )
}
