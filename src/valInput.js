import { useEffect, useState } from "react";
import Flip from "./flipit";
import tokenImage from './images/token.png'
import blackImage from './images/black.png'
//import HeadTail from "./ht";
var num=null;
var wonit=null;
const Inputval=({com,val,setVal,setImage,setText})=>{
    const [totValue,setotVal]=useState(null)
    const [strInp,setStrInp]=useState(null)
    const [tokenText, setToken]=useState(false)
    const [flip, setFlip]=useState(true)
    const [click,setClick]=useState(true)
    /* useEffect(()=>{
        console.log(com)
    },[com]) */
    const getVal=(cls)=>{
        //4:30am
        var vr="."+cls
        const userClickchc=Number(document.querySelector(vr).innerHTML.slice(1))
        setStrInp(userClickchc)
        //valui took over var tokenValue=Number(document.getElementById("token-value").innerHTML.slice(1))
        if(userClickchc<=val){
            num=userClickchc
            wonit=userClickchc*2
            setotVal(userClickchc*2)
            document.querySelector('.flipdc').style.backgroundColor="rgb(81, 134, 233)"
            document.querySelector('.tokenCheck').style.display="none"
            setToken(true)
            setFlip(false)
        }
        else{
            setFlip(true)
            setToken(false)
            document.querySelector('.tokenCheck').style.display="block"
            setotVal(userClickchc*2)
            console.log("Top-up wallet")
            document.querySelector('.flipdc').style.backgroundColor="rgba(255, 255, 255, 0.425)"
            //document.querySelector('.flipdc').style.cursor="not-allowed"
        }
    }
    
    function zp(){
        setClick(false)
        if(!flip&&val>=1){
            var random=Math.ceil(Math.random()*2)
            //image area error maybe helpppp meeee :(
            //later mesage, no error occured 3:55am 
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
            setVal(pnum=>pnum-num)
            if(com=="Head"&&random==1){
                //logical check pass
                setVal(pnum=>pnum+wonit)
                setImage(tokenImage)
                setText("Head!, you won")
                document.querySelector('.text').style.color=" rgb(85, 223, 85)"
            }
            else if(com=="Tail"&&random==2)
            {
                setVal(pnum=>pnum+wonit)
                setImage(blackImage)
                setText("Tail!, you won")
                document.querySelector('.text').style.color=" rgb(85, 223, 85)"
            }
            else{
                if(random===1){
                   setText("u lost, Head won!")  
                    document.querySelector('.text').style.color="red"       
                }
                else if(random===2){
                    setText("u lost, Tail won!")
                    document.querySelector('.text').style.color="red"
                }
            }   
                document.querySelector('.text').style.display="block"
                setClick(true)
                setTimeout(()=>document.querySelector('.text').style.display="none",5000)
                clearInterval(t)
            },5000)
        }
        else if(flip&&val<=0){
            document.querySelector('.tokenCheck').style.display="block"
            document.querySelector('.flipdc').style.backgroundColor="rgba(255, 255, 255, 0.425)"
        }
        else{
            setToken(true)
            document.querySelector('.tokenCheck').style.display="none"
            document.querySelector('.flipdc').style.backgroundColor="rgba(255, 255, 255, 0.425)"
            
        }
    }
    return(
        <div>
        <div className="flexInputval">
            {tokenText&&<div>get ${totValue} for ${strInp}</div>}
            <div className="input-value">
                <div className="sub-input">
                    <div style={{
                cursor: "pointer"
                }} className="one" onClick={()=>getVal("one")}>$1</div>
                    <div style={{
                cursor: "pointer"
                }} className="two" onClick={()=>getVal("two")}>$5</div>
                    <div style={{
                cursor: "pointer"
                }} className="thr" onClick={()=>getVal("thr")}>$10</div>
                </div>
                <div className="sub-input">
                    <div style={{
                cursor: "pointer"
                }} className="f4" onClick={()=>getVal("f4")}>$20</div>
                    <div style={{
                cursor: "pointer"
                }} className="fv" onClick={()=>getVal("fv")}>$50</div>
                    <div style={{
                cursor: "pointer"
                }} className="si" onClick={()=>getVal("si")}>$100</div>
                </div>
            </div>
            <div className="tokenCheck" style={{color:"red"}}>token not enough,top up wallet</div>
        </div>
        <Flip func={click?zp:null}/>
        </div>
    )
}
export {num}
export default Inputval;
