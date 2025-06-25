import React, { useState } from 'react'

const Formele = () => {

    const [User,setUser] = useState("")
    const [newUserDetails,setnewUserDetails] = useState()
    const getUser= (event) =>{
        setUser(event.target.value)
    }   
    const UserDetails=(e)=>{
      e.preventDefault()
      setnewUserDetails(User)
    }

  return (
    <section className='formsection'>
    <h1 className='h1cls'>Hello ! {newUserDetails}</h1>
    
    <div className='inputcls'>
      <form onSubmit={UserDetails}>
      <input type="text" placeholder='Enter Your name'onChange={getUser}/>
      <br />
      <button className='submitbtn' type="submit">Submit</button>
      </form>
    </div>
    
    </section>
  )
}

export default Formele

