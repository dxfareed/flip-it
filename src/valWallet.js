import { useEffect, useState } from "react"
var useWalletVal=()=>{
    const [valui, setValui]=useState(200)
   useEffect(()=>{
        console.log("hehhe")
    }, [valui])
    return {valui, setValui}
}
export default useWalletVal;