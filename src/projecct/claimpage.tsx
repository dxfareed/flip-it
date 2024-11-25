import './index.css';
import HeadTail from "./ht";
import { useAccount, useConnect, useDisconnect } from 'wagmi';
//@ts-ignore
const ClaimPage=({val,setVal})=>{
    const account = useAccount()
    const { connectors, connect} = useConnect()
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
          account.status==='disconnected' &&
          connectors.map((connector) => (
              connector.name === "MetaMask"  && (
                <div
                  key={connector.uid}
                  onClick={() => connect({ connector })}
                >
                  CONNECT WALLET
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
          </div>
    )
}
export default ClaimPage;
