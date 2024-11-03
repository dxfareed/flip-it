import { useState } from "react";
import Flip from "./flipit";
import tokenImage from './images/fixAutumn.png'
import blackImage from './images/autumnBlack.png'
import { useAccount} from 'wagmi';
import ca from '../../sc/ca';
import abi from '../../sc/abi.json';
import Web3 from "web3";
var num=null;/*@ts-ignore*/
var wonit=null;
/*@ts-ignore*/
const Inputval=({com,val,setVal,setImage,setText})=>{
    const rpc= new Web3("https://sepolia.base.org");
    const [totValue,setotVal]=useState(null)
    const [strInp,setStrInp]=useState(null)
    const [tokenText, setToken]=useState(false)
    const [flip, setFlip]=useState(true)
    const [click,setClick]=useState(true)
    const {status, address} = useAccount()
    const [boolBal, setBoolBal] = useState(true)
    //@ts-ignore
    const getVal=(cls)=>{
        //4:30am
        var vr="."+cls
        //@ts-ignore
        const userClickchc=Number(document.querySelector(vr).innerHTML.slice(1))
        //@ts-ignore
        setStrInp(userClickchc)
        //i miss the old kanye
        if(userClickchc < val){
            num=userClickchc
            wonit=userClickchc*2//@ts-ignore
            setotVal(userClickchc*2)//@ts-ignore
            document.querySelector('.flipdc').style.backgroundColor=" rgb(219, 144, 31)"//@ts-ignore
            document.querySelector('.tokenCheck').style.display="none"//@ts-ignore
            setToken(true)
            setFlip(false)
        }
        else{
            setFlip(true)
            setToken(false)
            /*@ts-ignore*/
            document.querySelector('.tokenCheck').style.display="block"//@ts-ignore
            setotVal(userClickchc*2)//@ts-ignore
            console.log("Top-up wallet")//@ts-ignore
            document.querySelector('.flipdc').style.backgroundColor="rgba(255, 255, 255, 0.425)"//@ts-ignore
        }
    }
    const removeToken = async()=>{
        const provider= window.ethereum;
        const web3 = new Web3(provider);
        const contract = await new web3.eth.Contract(abi, ca);
        try {
          await contract.methods.flipClick(address, num).send({ from: address })
          .then(()=>{
            setBoolBal(true);
        })
          .catch(()=>{
            setBoolBal(false);
            console.log("Failed trnx");
          }  
        );
        }
        catch(err){
            setBoolBal(false);
            console.log("trnx didn't go thru")
        }
    }


    //failed trnx still flip, fix later


    const zp = async() =>{
        console.log(val, com, num);
        setClick(false)
        if( ( !flip && num < val)){
           await removeToken();
           async function decid(){
            if(boolBal){
                console.log(" success")
                var random=Math.ceil(Math.random()*2) 
                var rsd=com
                var t=setInterval(()=>{
                    if(rsd=="Head"){
                        setImage(blackImage)
                        rsd="Tail"
                    }
                    else{
                        setImage(tokenImage)
                        rsd="Head"
                    }
                }, 400);
                setTimeout(()=>{
                    /*@ts-ignore*/
                setVal(pnum=>pnum-num)
                if(com=="Head"&&random==1){
                    /*@ts-ignore*/
                    setVal(pnum=>pnum+wonit)
                    setImage(tokenImage)
                    setText("Head!, you won")
                    /*@ts-ignore*/
                    document.querySelector('.text').style.color=" rgb(85, 223, 85)"
                }
                else if(com=="Tail"&&random==2)
                {
                    /*@ts-ignore*/
                    setVal(pnum=>pnum+wonit)
                    setImage(blackImage)
                    setText("Tail!, you won")
                    /*@ts-ignore*/
                    document.querySelector('.text').style.color=" rgb(85, 223, 85)"
                }
                else{
                    if(random===1){
                       setText("u lost, Head won!")  
                       /*@ts-ignore*/
                        document.querySelector('.text').style.color="red"       
                    }
                    else if(random===2){
                        setText("u lost, Tail won!")
                        /*@ts-ignore*/
                        document.querySelector('.text').style.color="red"
                    }
                }   
                setClick(true);
                    /*@ts-ignore*/
                    document.querySelector('.text').style.display="block"
                    setClick(true)
                    /*@ts-ignore*/
                    setTimeout(()=>document.querySelector('.text').style.display="none",5000)
                    clearInterval(t)
                },5000)
                }
            else{
                console.log(boolBal);
                console.log("FAIled here")
            }
           }
           await decid();
        }    
        else if(( !flip && num > val)){
            /*@ts-ignore*/
            document.querySelector('.tokenCheck').style.display="block"/*@ts-ignore*/
            document.querySelector('.flipdc').style.backgroundColor="rgba(255, 255, 255, 0.425)";
            setClick(true);
        }
        else{
            //setClick(true)
            console.log("CHAT")
            setToken(true);
            /*@ts-ignore*/
            document.querySelector('.tokenCheck').style.display="none"/*@ts-ignore*/
            document.querySelector('.flipdc').style.backgroundColor="rgba(255, 255, 255, 0.425)"
            
        }
    }
    return(
        <div>
        <div className="flexInputval">
            {tokenText&&<div>get ${totValue} for ${strInp}</div>}
            <div className="input-value">
                <div className="sub-input">
                    <div className="one" onClick={()=>getVal("one")}>$1</div>
                    <div className="two" onClick={()=>getVal("two")}>$5</div>
                    <div className="thr" onClick={()=>getVal("thr")}>$10</div>
                </div>
                <div className="sub-input">
                    <div className="f4" onClick={()=>getVal("f4")}>$20</div>
                    <div className="fv" onClick={()=>getVal("fv")}>$50</div>
                    <div className="si" onClick={()=>getVal("si")}>$100</div>
                </div>
            </div>
            <div className="tokenCheck" style={{color:"red"}}>token not enough,top up wallet</div>
        </div>
        {status=="connected"&&<Flip func={click?zp:null}/>}
        </div>
    )
}
export {num}
export default Inputval;