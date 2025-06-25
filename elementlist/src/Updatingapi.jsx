import React ,{useState,useEffect}from 'react';
import './Updatingapi.css';

const Updatingapi = () => {
  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [course,setCourse] = useState("");

  const studentDetails = {name,age,course};

  const studentinfo = async(e)=>{
    e.preventDefault();
    console.log(studentDetails);

    const response = await fetch("http://127.0.0.1:8000/api/students/",{
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(studentDetails)
    })
    

  };

  return (
    <div>
        <div className='Formsection'>
            <form onSubmit={studentinfo}>
                <label> Student name</label><br />
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/><br />
                <label> Student age</label><br />
                <input type="number" name="age" onChange={(e)=>setAge(e.target.value)}/><br />
                <label>Course</label><br />
                <input type="text" name="course" onChange={(e)=>setCourse(e.target.value)}/><br />
                <button className="submitbtn" type="submit">Submit</button>
            </form>

        </div>
    </div>
  )
}

export default Updatingapi
