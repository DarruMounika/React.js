import React from 'react'

const Arrobjmap = () => {
    const userLogin = [{
        name:"Vineeth",
        password:"Mouni#3801",
        email_id:"mounikareddy3801@gmail.com",
        sign_up:true,
}]
  return (
    <div>
        {userLogin.map((user,index)=>(
            <div key={index}>
                <h3>{user.name}</h3>
                <h3>{user.email_id}</h3>
                <h3>{user.password}</h3>
                <h3>Signed up : {user.sign_up ? "Yes":"No"}</h3>
                
            </div>
        ))}
    </div>
      
  )
}

export default Arrobjmap
