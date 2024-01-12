import React, { useState } from 'react'
import { GoNorthStar } from "react-icons/go";
import ResetPassword from './ResetPassword';


const ForgetPassword = () => {

    const[showResetPassword,setShowResetPassword]=useState(false);

    const handleShowResetPassword=()=>{
        setShowResetPassword(true)
    }
     if(showResetPassword===true)
     {
        return(  <ResetPassword />)
     }
     else
     {
        return (
            <div className="formContainer border mt-4">
            <div className="text-center">
              
              <GoNorthStar />
            </div>
            <p className="h5 fw-bold mt-3 text-center">
             Forgot Password
            </p>
           
        
            <div className="input-group my-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                id="input"
              />
            </div>
            <div className="footer text-center">
           Please enter your login email address to receive your password reset link.
         </div>
        
            <div className="btn-container mt-5 text-center">
          <button className="btn border px-5 rounded-pill"
          onClick={handleShowResetPassword}>Get a Link</button>
           </div>
        
          </div>
          )
     }
 
}

export default ForgetPassword