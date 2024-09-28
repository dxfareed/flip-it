import './index.css'
//import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import HeadTail from "./ht";
import { useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi'
//@ts-ignore
const HomeNav=({val,setVal, numi, setNumi})=>{
    const account = useAccount()
    const { connectors, connect, status, error } = useConnect()
    const { disconnect } = useDisconnect()
    var addrez=JSON.stringify(account.addresses);
    //console.log(connectors)
    return(
        <div>
            <div style={{
                textAlign:"center",
                marginTop:"5px"
            }}>{account.status}</div>
            <div  style={{
                textAlign:"center"
            }}>{
                   account.status=='connected'&&`${addrez.slice(2,6)}....${addrez.slice(addrez.length-6,addrez.length-2)}`
                }
            </div>
        <div className="homenav">
            <div id='connect-wallet'>
        {
            account.status=='disconnected' &&
            connectors.map((connector, index) => (
                index === 0 && (
                  <div
                    key={connector.uid}
                    onClick={() => connect({ connector })}
                  >
                    Connect wallet
                  </div>
                )
              ))
        }
        {account.status === 'connected' && (
          <div onClick={() => disconnect()}>
            Disconnect wallet
          </div>
        )}
            </div>
            <div id='token-value'>${val}</div>
        </div>
        <HeadTail cacl={val} setCacl={setVal}/>
        </div>
    )
}
export default HomeNav;