import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Sidebar from "../Sidebar/Sidebar"
import "./Navbar.css"



const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="Sidebar"><Sidebar/></div>
        <div className="logo"> Issue Tracker</div>
    
   </div>
  )
} 

export default Navbar