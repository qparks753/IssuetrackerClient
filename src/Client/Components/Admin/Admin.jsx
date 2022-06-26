import React, { useState, useEffect } from "react";
import DataService from "../../../Services/dataServ";
import Userscomp from '../Users/Users/Userscomp.jsx'

const BoardAdmin = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    DataService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
        <Userscomp/>
      </header>
    </div>
  );
};
export default BoardAdmin;