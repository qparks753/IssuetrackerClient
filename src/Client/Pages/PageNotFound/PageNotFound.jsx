import React from "react";
import "./PageNotFound.css";
import constructionImage from "./construction.png"

function PageNotFound() {
  return (
    <>
      <div>
        <div class="dialog">
          <h1 className="header">Oops!</h1>
          <p>
            We were unable to find the page you were looking for, but working
            hard to resolve this issue.
          </p>
          <a href="https://issuetracker.com" target="_blank" rel="noreferrer">
            IssueTracker.com
          </a>
          <div className="imgContainer">
          <img className="construction" src={constructionImage} alt="construction" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
