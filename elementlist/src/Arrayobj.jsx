import React from 'react'

const Arrayobj = () => {
    let Arr = ["Apple","Mango",24,{
        name: "Mounika",
        email_id:"mounikadharru99@gmail.com",
        mbl_no: 8897903801,
        location: "kadapa"
    }]
  return (
    <div>
      <h3>{Arr[0]}</h3>
      <h4>{Arr[1]}</h4>
      <h3>{Arr[2]}</h3>
    <h3>My name is {Arr[3].name}</h3>
    <h3>I'm {Arr[2]} years old</h3>
    <h3>I'm from {Arr[3].location}</h3>
    </div>
  )
}

export default Arrayobj
