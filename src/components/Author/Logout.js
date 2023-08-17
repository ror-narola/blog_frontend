const Logout =({setCurrAuthor})=>{
  const logout=async (setCurrAuthor)=>{
    try {
      const response=await fetch("http://localhost:3000/logout",{
        method: "delete",
        headers: {
          "content-type": "application/json",
          "authorization": localStorage.getItem("token")
        },
      })
      const data=await response.json()
      if(!response.ok) throw data.error
      localStorage.removeItem("token")
      setCurrAuthor(null)
    } catch (error) {
        console.log("error", error)
    }
  }
  const handleClick=e=>{
    e.preventDefault()
    logout(setCurrAuthor)
  }
  return (
    <div>
      <input type="button" value='Logout' onClick={handleClick}/>
    </div>
  )
}
export default Logout