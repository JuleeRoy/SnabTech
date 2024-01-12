import React from 'react'
import { GoNorthStar } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
const ResetPassword = () => {

    const navigate=useNavigate();

    const navigateToSignPage=()=>{
       
        navigate("/");
       
    }
  return (
<div className="formContainer border mt-4">
    <div className="text-center">
      
      <GoNorthStar />
    </div>
    <p className="h5 fw-bold mt-3 text-center">
     Reset Password
    </p>
   

    <div className="input-group my-3">
      <input
        type="email"
        className="form-control"
        placeholder="Enter new password"
        id="input"
      />
    </div>
    <div className="input-group my-3">
      <input
        type="email"
        className="form-control"
        placeholder="Re-Enter password"
        id="input"
      />
    </div>


    <div className="btn-container mt-5 text-center">
  <button className="btn border px-5 rounded-pill"
  onClick={()=>{navigateToSignPage()}}
  >Reset My Password</button>
   </div>

  </div>
  )
}

export default ResetPassword