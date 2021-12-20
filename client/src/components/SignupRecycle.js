import React from 'react';
// import signpic from "../images/rms1.jpeg"; 
import {NavLink} from "react-router-dom"; 

const SignupRecycle =() =>{
    return(
         <> 
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up Recycle Stations</h2>
                            <form className="register-form" id="register-form">

                                <div className="form-group">
                                    <label htmlFor="name">
                                    <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name"  id="name" autoComplete="off"
                                    placeholder="Your Name"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">
                                    <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email"  id="email" autoComplete="off"
                                    placeholder="Your Email"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                    <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="number" name="phone"  id="phone" autoComplete="off"
                                    placeholder="Your Phone"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work">
                                    <i class="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name"  id="name" autoComplete="off"
                                    placeholder="Your Address"/>
                                </div> 

                                <div className="form-group">
                                    <label htmlFor="work1">
                                    <i class="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name"  id="name" autoComplete="off"
                                    placeholder="Your District"/>
                                </div> 

                                <div className="form-group">
                                    <label htmlFor="work2">
                                    <i class="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name"  id="name" autoComplete="off"
                                    placeholder="Your Mandal"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password"  id="password" autoComplete="off"
                                    placeholder="Your Password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="cpassword" name="cpassword"  id="cpassword" autoComplete="off"
                                    placeholder="Confirm Your Password"/>
                                </div>

                                <div className="form-group-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit"
                                    value="register"
                                    />
                                </div>

                            </form>
                        </div>
                            <div className="signup-image">
                                <figure>
                                    {/* <img src={signpic} alt="registartion pic"/> */}
                                </figure>
                                <NavLink to="/login" className="signup-image-link"></NavLink>
                            </div>
                    </div>
                </div>
            </section> 
         </>
    )
}

export default SignupRecycle;