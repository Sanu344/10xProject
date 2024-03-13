import React from "react";
import "./signup.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Signup({ status }) {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const info = {
      email: data.email,
      password: data.password,
    };
    if (data.password === data.pass) {
      fetch("http://localhost:3030/api/users/reg", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((data) => data.json())
        .then((response) => {
          if (response.status === true) {
            alert(JSON.stringify(response.message));
            // console.log(response.token);
            nav("/");
          } else {
            alert(JSON.stringify(response.message));
          }
        });
    } else {
      alert("password mismatch");
    }
  };

  return (
    <>
      <div className="bodys">
        <div className="background">
          <div className="signUpPage">
            <div className="layout">
              <div className="logo_and_new_account">
                <p className="logo">Logo</p>
                <p className="newAccount">Create New Account</p>
              </div>

              <div className="formPage">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="mail"
                    name="mailId"
                    {...register("email")}
                    placeholder="Mail ID"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    {...register("password")}
                    placeholder="Password"
                    required
                  />
                  <input
                    type="password"
                    name="confirm_password"
                    {...register("pass")}
                    placeholder="Confirm Password"
                    required
                  />

                  <button className="signupButton">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
          <p className="signin">Sign in</p>
        </div>
      </div>
    </>
  );
}

export default Signup;
