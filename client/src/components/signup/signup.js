 import React from "react";
import "./signup.css"

function Signup() {
    return  <>
        <div className="background">

         <div className="signUpPage">
            <div className="layout">
               <div className="logo_and_new_account">
                <p className="logo">Logo</p>
                <p className="newAccount">Create New Account</p>
        </div>

                <div className="formPage">
                  <form>
                     <input type="mail" name = "mailId" placeholder="Mail ID" required />
                     <input type="password" name = "password" placeholder="Password" required/>
                     <input type="password" name = "confirm_password" placeholder="Confirm Password" required />

                      <button class = "signupButton">Sign Up</button>
                  </form>
                </div>
            </div>
         
         </div>
         <p className="signin">Sign in</p>

        </div>


      
    
    </>
    
}

export default Signup 