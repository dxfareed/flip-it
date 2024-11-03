import { useEffect, useState } from "react";
import Web3 from "web3";
import ca from '../../sc/ca';
import abi from '../../sc/abi.json';
import { useAccount } from "wagmi";
var useWalletVal=()=>{
    const {address, status} = useAccount();
    const rpc= new Web3("https://sepolia.base.org");
    const [valui, setValui]=useState(0)
    async function Balanc(){
        const dec = 1*10**18;
        let returnBalance;
        const contract = await new rpc.eth.Contract(abi, ca);
        try{
            await contract.methods.Balance(address).call()
            .then((res)=> {
                returnBalance=Number(res)/dec;
                setValui(returnBalance);
            })
            .catch((err)=> {
                returnBalance=0;
                console.log(err);
                setValui(returnBalance);
            }
            );
        }
        catch(err){
            setValui(0);
            console.log(err);
        }
    }
   useEffect(()=>{
        status=='connected'?Balanc():null;
        console.log("hehhe")  
    }, [valui, status])
    return {valui, setValui}
}
export default useWalletVal;