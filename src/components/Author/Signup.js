import { useRef } from "react";
import { Container } from 'react-bootstrap';

const Signup=({setCurrAuthor, setShow})=>{
    const formRef = useRef()
    const signup=async (authorInfo, setCurrAuthor)=>{
      const url="http://localhost:3000/signup"
      try{
        const response=await fetch(url, {
          method: 'post',
          headers: {
            "content-type": 'application/json',
            "accept": "application/json"
          },
          body: JSON.stringify(authorInfo)
        }) 
        const data=await response.json()
        if(!response.ok) throw data.error
        localStorage.setItem('token', response.headers.get("Authorization"))
        setCurrAuthor(data)
      } catch (error){
        console.log("error", error)
      }
    }
    const handleSubmit=e=>{
      e.preventDefault()
      const formData=new FormData(formRef.current)
      const data=Object.fromEntries(formData)
      const authorInfo={
        "author":{ email: data.email, password: data.password, first_name: data.first_name, last_name: data.last_name, description: data.description }
      }
      signup(authorInfo, setCurrAuthor)
      e.target.reset()
    }
    const handleClick=e=>{
      e.preventDefault()
      setShow(true)
    }
    return(
      <Container className="p-5">
        <div>Register Author</div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label className="form-label col-form-label col-sm-2">FirstName:</label>
            <div className="col-sm-10">
              <input type="text" name='first_name' placeholder="first_name" className="form-control"/>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="form-label col-form-label col-sm-2">LastName:</label>
            <div className="col-sm-10">
              <input type="text" name='last_name' placeholder="last_name" className="form-control"/>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="form-label col-form-label col-sm-2">Email:</label>
            <div className="col-sm-10">
              <input type="email" name='email' placeholder="email" className="form-control"/>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="form-label col-form-label col-sm-2">Password:</label>
            <div className="col-sm-10">
              <input type="password" name='password' placeholder="password" className="form-control"/>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="form-label col-form-label col-sm-2">Describe Yourself:</label>
            <div className="col-sm-10">
              <textarea type="text" name='description' placeholder="description" className="form-control"/>
            </div>
          </div>
          
          <input type='submit' value="Submit" className="btn btn-primary" />
        </form>
        <br />
        <div>Already registered, <a href="#login" onClick={handleClick} >Login</a> here.</div>
    </Container>
    )
}
export default Signup