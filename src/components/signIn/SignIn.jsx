import React from 'react'
import { GoNorthStar } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const SignIn = ({showForgetPassword}) => {
  return (
    <div className="formContainer border mt-4">
    <div className="text-center">
      
      <GoNorthStar />
    </div>
    <p className="h5 fw-bold mt-3 text-center">
     Sign In
    </p>
   

    <div className="input-group my-3">
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        id="input"
      />
    </div>

    <div class="input-group mb-3">
      <input
        type="password"
        className="form-control"
        placeholder="Enter Password"
        aria-describedby="basic-addon1"
      />
      <span class="input-group-text" id="basic-addon1">
        <FaRegEye />
      </span>
    </div>
     <div className="forgetPassword">
       <NavLink to="#" onClick={()=>{showForgetPassword()}}>Forgot Password ?</NavLink>
     </div>
    
   <div className="btn-container mt-5 text-center">
  <button className="btn border px-5 rounded-pill">Sign In</button>
   </div>
  
  </div>
  )
}

export default SignIn