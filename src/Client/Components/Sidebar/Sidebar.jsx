import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./Sidebar.css";
import AuthService from "../../../Services/authServ";
const eventBus = require("js-event-bus")();

const Sidebar = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
    eventBus.on("logout", function () {
      logOut();
    });
    return () => {
      eventBus.die("logout");
    };
  }, []);
  const logOut = () => {
    AuthService.logout();
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div className="sidebar-main-div" >
      
      <button
        class="btn btn-primary collapseBtn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
       
      >
        {/* Button with data-bs-target */}
        <box-icon  name="menu" color="white"  id="menu-collapse-btn"></box-icon>
        
      </button>
     
      
     
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
         <div className="sidebarContainer">
        <div class="offcanvas-header">
          <h5
            class="offcanvas-title"
            id="offcanvasExampleLabel"
            style={{ marginLeft: "70px" }}
          >
            Issue Tracker
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>
            {/* Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc. */}
            <ul class="nav flex-column">
              {/* <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/projects">
                  <box-icon type="solid" name="dashboard"></box-icon>
                  Dashboard
                </a>
              </li>

              {/* <li class="nav-item">
                <a class="nav-link" href="/users">
                  <box-icon name="user" type="solid"></box-icon>
                  Users
                </a>
              </li> */}
              {/*
              <li class="nav-item">
                <a class="nav-link" href="/tickets">
                  <box-icon
                    type="solid"
                    name="message-square-detail"
                  ></box-icon>
                  Tickets
                </a>
              </li>
              */}

             {/* {showAdminBoard && (
                <li class="nav-item">
                  <a class="nav-link" href="/appusers">
                     <box-icon name="user" type="solid"></box-icon> 
                    <box-icon name="male-female"></box-icon>
                    Users
                  </a>
                </li>
              )} */}
            
              

             
              {/* {currentUser && (
                <li className="nav-item" style={{ marginLeft: "30px" }}>
                  <box-icon name="male-female"></box-icon>
                  <Link to={"/users"} className="nav-link">
                    Users
                  </Link>
                </li>
              )} */}



              {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li class="nav-item" style={{ marginLeft: "10px" }}>
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="/projects"
                    >
                      <box-icon type="solid" color="#5c7cdb" name="dashboard"></box-icon>
                      Projects 
                    </a>
                  </li>
                  {/* <li class="nav-item">
                <a class="nav-link" href="/users">
                  <box-icon name="user" type="solid"></box-icon>
                  Users
                </a>
              </li> */}

                  <li class="nav-item" style={{ marginLeft: "10px" }}>
                    <a class="nav-link" href="/tickets">
                      <box-icon
                        type="solid"
                        name="message-square-detail"
                        color="#5c7cdb"
                      ></box-icon>
                      Tickets
                    </a>
                  </li>

                  {showAdminBoard && (
                <li class="nav-item" style={{ marginLeft: "10px" }}>
                  <a class="nav-link" href="/users">
                  
                  <box-icon type='solid' color="#5c7cdb" name='user-plus'></box-icon>
                    {/* <box-icon name="user" type="solid"></box-icon> */}
                    
                    Users
                  </a>
                </li>
              )}
                 
                  <li className="nav-item" style={{ marginLeft: "10px" }}>
                    <Link to={"/profile"} className="nav-link">
                      <box-icon name="user-circle" color="#5c7cdb" type="solid"></box-icon>
                      {currentUser.username}
                    </Link>
                  </li>
                  
                  <li className="nav-item">
                    <a
                      href="/login"
                      className="nav-link logout"
                      onClick={logOut}
                      // style={{ marginLeft: "10px" }}
                    >
                      <box-icon  type="solid" color="#5c7cdb" name="log-out-circle"></box-icon>
                      Log Out
                    </a>
                  </li>
                </div>
              ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item item">
                    <Link to={"/login"} className="nav-link">
                      <box-icon type="solid" color="#5c7cdb" name="log-in-circle"></box-icon>
                      Log In
                    </Link>
                  </li>
                  <li className="nav-item item">
                    <Link to={"/register"} className="nav-link">
                      <box-icon name="task" color="#5c7cdb"></box-icon>
                      Sign Up
                    </Link>
                  </li>
                </div>
              )}
            </ul>

            {/* <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="/login"
                  tabindex="-1"
                  aria-disabled="true"
                  onClick={logOut}
                >
                  <box-icon type="solid" name="log-out-circle"></box-icon>
                  Log Out
                </a>
              </li>
            </ul> */}

            {/* </div>
          <div class="dropdown mt-3"> */}
            {/* <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button> */}
            {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
