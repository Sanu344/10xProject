import React from "react";
import "./login.css";

function Login() {
  return (
    <>
      <div className="login">
        <h1 className="logotxt">Logo</h1>
        <div className="formbox">
          <p className="topformtxt">
            Enter your credentials to access your account
          </p>
          <form className="form-login">
            <input
              type="text"
              className="userid-login"
              placeholder="    User Id"
              required="true"
            />
            <input
              type="password"
              className="password-login"
              placeholder="    Password"
              required="true"
            />
            <button className="button-login-form" type="submit">
              <p className="button-txt">Sign In</p>
            </button>
          </form>
        </div>
        <div className="Signuptxt">Sign Up</div>
      </div>
      <div className="signup-txt-outside-form">
        <p className="Ptxt1">Don't have an account?</p>
        <p className="Ptxt2">Sign Up</p>
      </div>
    </>
  );
}
export default Login;
