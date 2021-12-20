// import React from 'react'

// const SignupUsers = () => {
//   return ( 
//     <div> 
//       <h4> Hello </h4>
//       <h6> Welcome to Recycle Management System By Batch-62 </h6>
//     </div>
//   )
// } 



// export default SignupUsers;

import React, {useState} from 'react';
// import signpic from "../images/rms1.jpeg"; 
import {NavLink} from "react-router-dom"; 

const SignupUsers =() =>{ 

    const [user,setUser] = useState( {
        name:"", email:"", phone:"", password:"", cpassword:"" 
    }); 

    let name, value;
    const handleInputs =(e) => {
        console.log(e); 
        name= e.target.name; 
        value= e.target.value; 

        setUser({...user, [name]:value});
    }

    return( 
         <>  
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up Users</h2>
                            <form className="register-form" id="register-form">

                                <div className="form-group">
                                    <label htmlFor="name">
                                    <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name"  id="name" autocomplete="off"
                                    value={user.name}
                                    onChange={handleInputs}
                                    placeholder="Your Name"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">
                                    <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email"  id="email" autocomplete="off"
                                    value={user.email}
                                    onChange={handleInputs}
                                    placeholder="Your Email"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                    <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="number" name="phone"  id="phone" autocomplete="off"
                                    value={user.phone}
                                    onChange={handleInputs}
                                    placeholder="Your Phone"/>
                                </div>

                                {/* <div className="form-group">
                                    <label htmlFor="work">
                                    <i class="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name"  id="name" autocomplete="off"
                                    value={user.name}
                                    onChange={handleInputs}
                                    placeholder="Your Profession"/>
                                </div> */}

                                <div className="form-group">
                                    <label htmlFor="password">
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password"  id="password" autocomplete="off"
                                    value={user.password}
                                    onChange={handleInputs}
                                    placeholder="Your Password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="cpassword" name="cpassword"  id="cpassword" autocomplete="off"
                                    value={user.cpassword}
                                    onChange={handleInputs}
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

export default SignupUsers;
