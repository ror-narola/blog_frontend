import { useState,useEffect } from "react"

const PrivateText=({currAuthor})=>{
    const [message, setMessage]=useState(null)
    const getText=async ()=>{
      try {
        const response=await fetch("http://localhost:3000/private/test", {
          method: "get",
          headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token")
          }
        })
        if(!response.ok) throw Error
        const data=await response.json()
        setMessage(data.message)
      }
      catch(error){
        console.log("error", error)
        setMessage(null)
      }
    }
    useEffect(()=>{
      if(currAuthor)
        getText()
    },[currAuthor])
    return(
      <div>{message}</div>
    )
}
export default PrivateText