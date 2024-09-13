import { useEffect, useState } from 'react';
import tokenImage from './images/fixAutumn.png'
import blackImage from './images/autumnBlack.png'
import Inputval from './valInput';
const HeadTail=({cacl,setCacl})=>{
    const [gameChoice, setGameChoice]=useState("Head")
    const [image,setImage]=useState(tokenImage)
    const [text, setText]=useState(null)

    const headM=()=>{
        document.querySelector(".tailslct").style.backgroundColor="rgb(0, 0, 0)";
        document.querySelector(".headslct").style.backgroundColor=" rgb(219, 144, 31)";
        document.querySelector(".headslct").style.borderRadius="8px 0px 0px 8px";
        document.querySelector(".choice").display="block"
        setGameChoice("Head");
        setImage(tokenImage)
    }
    const tailM=()=>{
        document.querySelector(".headslct").style.backgroundColor="rgb(0, 0, 0)";
        document.querySelector(".tailslct").style.backgroundColor=" rgb(219, 144, 31)";
        document.querySelector(".tailslct").style.borderRadius="0px 8px 8px 0px";
        document.querySelector(".choice").display="block"
        setGameChoice("Tail");
        setImage(blackImage)
    }
    return(
        <div>
        <div className="text" style={{textAlign:"center"}}>{text}</div>
        <div className="HeadTail">
            <div className="imgToken">
                <img src={image}
                    style={{width:"300px"}}
                alt="img of base token"/>
            </div>
            <div><div className="choice"style={{marginTop:"35px"}}>{gameChoice} selected</div></div>
            <div className='sub-decision'>
                <div className='headslct' onClick={()=>headM()}>Head</div>
                <div className='tailslct'onClick={()=>tailM()}>Tail</div>
            </div>
        </div>
        <Inputval com={gameChoice} val={cacl} setVal={setCacl} setImage={setImage} setText={setText}/>
        </div>
    )
}

export default HeadTail;