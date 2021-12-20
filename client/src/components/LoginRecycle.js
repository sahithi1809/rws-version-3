import React from 'react';
// import loginpic from"../images/rms1.jpeg";
import {NavLink} from "react-router-dom"; 
import Loginform from "./Loginform"; 

const LoginRecycle = () => {
  return ( 
      //<h1>Hi</h1>
    <> 
            <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content"> 

                    <div className="signin-image">
                                <figure>
                                    {/* <img src={loginpic} alt="login pic"/> */}
                                </figure>
                                <NavLink to="/signupusers" className="signup-image-link">Create an Account</NavLink>
                            </div>


                        <div className="signin-form">
                            <h2 className="form-title">Sign in Recycle Station</h2> 
                            <Loginform />
                            {/* <form className="register-form" id="register-form">

                                <div className="form-group">
                                    <label htmlFor="name">
                                    <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email"  id="email" autoComplete="off"
                                    placeholder="Your Email"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password"  id="password" autoComplete="off"
                                    placeholder="Your Password"/>
                                </div>

                                <div className="form-group-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit"
                                    value="Log In"
                                    />
                                </div>

                            </form> */}
                        </div>
                            
                    </div>
                </div>
            </section> 
         </>
  )
} 



export default LoginRecycle;