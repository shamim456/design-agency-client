import React from "react";
import Home from './Component/HomePage/Home/Home';
// eslint-disable-next-line
import "swiper/css/bundle";
import './App.css';
import NavBar from "./Component/Shared/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import LogIn from "./Component/LogIn/LogIn";
import SignUp from "./Component/SignUp/SignUp";




function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
