import { useRef, useState } from "react";
import { Container } from 'react-bootstrap';

const Login = ({setCurrAuthor, setShow}) =>{
  const formRef= useRef()
  const [err, setErr] = useState("");
  const login=async (authorInfo, setCurrAuthor)=>{
    const url="http://localhost:3000/login"
    try{
      const response=await fetch(url, {
        method: "post",
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(authorInfo)
      })
      const data=await response.json()
      if(!response.ok) 
        throw data.error
      setErr("Author successfully login")
      localStorage.setItem("token", response.headers.get("Authorization"))
      setCurrAuthor(data)
    }catch(error){
      setErr(error)
      console.log("error", error)
    }
  }
  const handleSubmit=e=>{
    e.preventDefault()
    const formData=new FormData(formRef.current)
    const data=Object.fromEntries(formData)
    const authorInfo={
      "author":{ email: data.email, password: data.password }
    }
    login(authorInfo, setCurrAuthor)
    // e.target.reset()
  }
  const handleClick=e=>{
    e.preventDefault()
    setShow(false)
  }
  return(
    <Container className="p-5">
      <div>Login Author</div>
      <div style={{'color':'red'}}>
        {err && (
          <div>{err}</div>
        )}
      </div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label className="form-label col-form-label col-sm-2">Email:</label>
          <div className="col-sm-10">
            <input type="email" name='email' placeholder="email" className="form-control"/>
          </div>
        </div>
        <br/>
        <div className="mb-3 row">
          <label className="form-label col-form-label col-sm-2">Password:</label>
          <div className="col-sm-10">
            <input type="password" name='password' placeholder="password" className="form-control"/>
          </div>
        </div>
        <input type='submit' value="Login" className="btn btn-primary" />
      </form>
      <br />
      <div>Not registered yet, <a href="#signup" onClick={handleClick} >Signup</a> </div>
    </Container>
  )
}
export default Login