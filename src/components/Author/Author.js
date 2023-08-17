import Signup from "./Signup";
import Login from './Login'
import Logout from './Logout'
import PrivateText from "../PrivateText";
import { useState } from "react";

const Author = ({currAuthor, setCurrAuthor}) => {
  const [show, setShow]=useState(true)
  if(currAuthor) 
    return (
      <div>
      Hello {currAuthor.email}
      <PrivateText currAuthor={currAuthor}/>
      <Logout setCurrAuthor={setCurrAuthor}/>
      </div>
    )
  return (
    <div>
      { show?
        <Login setCurrAuthor={setCurrAuthor} setShow={setShow}/>  
        :
        <Signup setCurrAuthor={setCurrAuthor}  setShow={setShow} />
      }
    </div>
  )
}
export default Author