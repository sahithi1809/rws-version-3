import React from 'react' 
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom"; 
import logo from "../images/logo1.png"; 
import "./App.css";

const Navbar = () => {
  return ( 
    <> 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="#"> 
      <img className= "here" src={logo} alt="RMS"/>
   </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
      <NavLink className="nav-link" to="/">Home</NavLink>
        {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li> 

      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>


      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          SignUp
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="/signupusers">Users</NavLink>
          <NavLink className="dropdown-item" to="/signuprecycle">Recycle Stations</NavLink>
          {/* <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a> */}
        </div>
      </li> 


      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Login
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="/loginadmin">Admin</NavLink> 
          <NavLink className="dropdown-item" to="/loginusers">Users</NavLink>
          <NavLink className="dropdown-item" to="/loginrecycle">Recycle Stations</NavLink>
          {/* <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a> */}
        </div>
      </li>


      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
    </>
  )
} 



export default Navbar;

