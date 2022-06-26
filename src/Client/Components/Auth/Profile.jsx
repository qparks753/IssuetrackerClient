import React from "react";
import AuthService from "../../../Services/authServ";
import "./Profile.css";
import userimage from "./user.png"
import Navbar from "../Navbar/Navbar"

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  
  return (
    <div className="holder">
    <Navbar/>
    <div className="container">
     
     
      <header className="jumbotron">
        <h1>User Profile</h1>
        <img src={userimage} alt="user" className="userimage" />
        <h3>User: {currentUser.username}</h3>
      </header>
      <p>
        <span>ID:</span> {currentUser.id}
      </p>
      <p>
        <span>Email:</span> {currentUser.email}
      </p>
      <div className="roles">
      <span>Authorities:</span>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => (
            <li style={{ listStyle: "none" }} key={index}>
              {role}
            </li>
          ))}
      </ul>
      </div>

      
    </div>
    </div>
  );
 
};
export default Profile;
