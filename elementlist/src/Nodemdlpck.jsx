import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

function nodemdlpck() {
    const notify = () => toast("Submitted successful !")
  return (
    <div>
      <button onClick={notify}> Notify !</button>
      <ToastContainer/>
    </div>
  )
}

export default nodemdlpck
