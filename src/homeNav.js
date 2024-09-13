import './index.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import HeadTail from "./ht";
const HomeNav=({val,setVal, numi, setNumi})=>{
    return(
        <div>
        <div className="homenav">
            <div id='connect-wallet'>
                <Link to="/external" style={{textDecoration:"none", color:"white"}}> connect wallet</Link>
            </div>
            <div id='token-value'>${val}</div>
        </div>
        <HeadTail cacl={val} setCacl={setVal}/>
        </div>
    )
}
export default HomeNav;