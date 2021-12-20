//import logo from './logo.svg';
//import './App.css';
//BrowserRouter,
import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom"; 
import "./App.css";
// import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact"; 
import LoginAdmin from "./components/LoginAdmin"; 
import LoginRecycle from "./components/LoginRecycle"; 
import LoginUsers from "./components/LoginUsers"; 
import SignupUsers from "./components/SignupUsers"; 
import SignupRecycle from "./components/SignupRecycle"; 

const App = () => {
  return ( 
    <> 
    <Navbar /> 

    <Routes>
    <Route exact path="/" element={ <Home /> } />
    <Route path="/about" element={ <About /> } />
    <Route path="/contact" element={ <Contact /> } /> 
    <Route path="/signupusers" element={ <SignupUsers /> } />
    <Route path="/signuprecycle" element={ <SignupRecycle /> } /> 
    <Route path="/loginadmin" element={ <LoginAdmin /> } /> 
    <Route path="/loginusers" element={ <LoginUsers /> } /> 
    <Route path="/loginrecycle" element={ <LoginRecycle /> } />
    </Routes>

    {/* 

    <Route path="/about">
        <About />
    </Route> 

    <Route path="/contact">
        <Contact />
    </Route> 

    <Route path="/signupusers">
        <SignupUsers />
    </Route> 

    <Route path="/signuprecycle">
        <SignupRecycle />
    </Route> 

    <Route path="/loginadmin">
        <LoginAdmin />
    </Route> 

    <Route path="/loginusers">
        <LoginUsers />
    </Route> 

    <Route path="/loginrecycle">
        <LoginRecycle />
    </Route>  */}
    {/* </Routes> */}
   

    </>
  )
} 


export default App;
