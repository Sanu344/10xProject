import React, { useState } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

function Login({ onclick }) {
  const [click, setClick] = useState(false);
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://realestate-q1pp.onrender.com/api/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((response) => {
        if (response.status === true) {
          alert(JSON.stringify(response.message));
          // console.log(response.token);
          localStorage.setItem("happyCat", response.token);
          localStorage.setItem("allowed", true);
          localStorage.setItem("kittytag", response.email);
          nav("/pptv");
        } else {
          alert(JSON.stringify(response.message));
        }
      });
  };

  return (
    <>
      <div className="body">
        <div className="login">
          <h1 className="logotxt">Logo</h1>
          <div className="formbox">
            <div onClick={() => setClick(!click)} className="react-icon1">
              {click === true ? <IoEye /> : <IoEyeOff />}
            </div>

            <p className="topformtxt">
              Enter your credentials to access your account
            </p>
            <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                {...register("email")}
                className="userid-login"
                placeholder="    User Id"
                required
              />
              <input
                type={click === true ? "text" : "password"}
                {...register("password")}
                className="password-login"
                placeholder="    Password"
                required
              />
              <button className="button-login-form" type="submit">
                <p className="button-txt">Sign In</p>
              </button>
            </form>
          </div>
          <div onClick={() => nav("/signup")} className="Signuptxt">
            Sign Up
          </div>
        </div>
        <div className="signup-txt-outside-form">
          <p className="Ptxt1">Don't have an account?</p>
          <p onClick={() => nav("/signup")} className="Ptxt2">
            Sign Up
          </p>
        </div>
      </div>
    </>
  );
}
export default Login;
