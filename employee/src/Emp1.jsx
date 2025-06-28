import React, { useState } from 'react';
import './Emp1.css';


const Emp1 = () => {
  const [name,setName] = useState("");
  const [role,setRole] = useState("");
  const [company,setCompany] = useState("");
  const [mblno,setMblno] = useState("");

  const employeeInfo = {name,role,company,mblno}

  const employeefun = async(e) =>{
    e.preventDefault();
    console.log(employeeInfo);

    const response = await fetch("http://127.0.0.1:8000/api/employee/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(employeeInfo)
    })

  }
  
  return (
    <div className='empform'>
      <h1>Employee Information</h1>
      <form onSubmit={employeefun}>
        <label><b>Employee Name </b> </label><br />
        <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/><br />
        <label><b> Employee Role </b></label><br />
        <input type="text" name="role" onChange={(e)=>setRole(e.target.value)}/><br />
        <label> <b>Employee Company Name </b></label><br />
        <input type="text" name="company"onChange={(e)=>setCompany(e.target.value)}/><br />
        <label><b> Employee Mobile Number </b></label><br />
        <input type="tel" pattern="[0-9]{10}" name="mblno" onChange={(e)=>setMblno(e.target.value)}/><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Emp1
