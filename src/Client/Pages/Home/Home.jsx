import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ProjectsTable from "../../Components/Projects/ProjectsTable";
// import { Type } from "../../Components/Charts/Type.tsx";
import "./Home.scss"
// import { Priority } from "../../Components/Charts/Priority.tsx";
// import { Status } from "../../Components/Charts/Status.tsx"

function Home() {
  return (
    <div className="pagecontainer">
      <Navbar/>
      <ProjectsTable/>
      <div className="chartContainer">
      {/* <Status />
      <Type />
      <Priority/> */}
      </div>
    

    </div>

    
  );
}

export default Home;
