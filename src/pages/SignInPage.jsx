



import React, { useState } from "react";
import signin from "../assets/signin.png";
import "../components/styles/style.css";

import JionPanda from "../components/signIn/JionPanda";
import SignIn from "../components/signIn/SignIn";
import ForgetPassword from "../components/signIn/ForgetPassword";

const SignInPage = () => {
  const [activeComponent, setActiveComponent] = useState("joinPanda");

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="contaniner-fluid mt-5" id="signIn">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-12 left-part">
            <div className="welcomePanda h3">Welcome to PANDA</div>
            <figure>
              <img src={signin} alt="" className="img-fluid" />
            </figure>
          </div>
          <div className="col-md-5 col-12 right-part p-2">
            <div className="d-flex justify-content-around">
              <button
                className={`btn border rounded-pill px-3  ${
                  activeComponent === "joinPanda" ? "active" : ""
                }`}
                onClick={() => handleComponentChange("joinPanda")}
                autoFocus={activeComponent === "joinPanda"}
              >
                Join PANDA
              </button>
              <span className="btn">Or</span>
              <button
                className={`btn border rounded-pill px-3  ${
                  activeComponent === "signIn" ? "active" : ""
                }`}
                onClick={() => handleComponentChange("signIn")}
              >
                Sign in
              </button>
            </div>

            {activeComponent === "joinPanda" && <JionPanda />}
            {activeComponent === "signIn" && (
              <SignIn
                showForgetPassword={() =>
                  handleComponentChange("forgetPassword")
                }
              />
            )}
            {activeComponent === "forgetPassword" && <ForgetPassword />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
