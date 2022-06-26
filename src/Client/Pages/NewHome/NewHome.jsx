import React from "react";
import "./NewHome.css";
import Navbar from "../../Components/Navbar/Navbar";
import tracking from "./tracking.svg";

const NewHome = () => {
  return (
    <div>
      <Navbar />
      <div className="homeBodyDiv">
        <div className="showcase">
          <h4>Welcome To IssueTracker</h4>
          <h5> Fast, Simple, Effective </h5>
          <p>
            Issue Tracker offers a fast and sleek application issue tracking
            system that allows users to create and track tickets to successful issue resolution.
          </p>
        </div>
        <div className="trackingImgDiv">
          <img
            className="trackTicketImg"
            src={tracking}
            alt="person tracking tickets"
          />
        </div>
      </div>
    </div>
  );
};

export default NewHome;
