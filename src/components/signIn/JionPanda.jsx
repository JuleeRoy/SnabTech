import React from 'react'
import { GoNorthStar } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const JionPanda = () => {
  return (



            <div className="formContainer border mt-4">
              <div className="text-center">
                
                <GoNorthStar />
              </div>
              <p className="h5 fw-bold mt-3 text-center">
                
                Create your free account
              </p>
              <p className="h6 text-center">
                Takes less than
                <span className="min5"> 5 minutes...</span>
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
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                I'm an Expert
              </label>
            </div>
             <div className="btn-container mt-5 text-center">
            <button className="btn border px-5 rounded-pill">Join PANDA</button>
             </div>
            <div className="footer text-center mt-5">
            By clicking on "Create an account", you agree to our terms of use and privacy policy.
            </div>
            </div>

            

  )
}

export default JionPanda