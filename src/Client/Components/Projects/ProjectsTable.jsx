import React,{useEffect, useState} from "react";
import "./ProjectsTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import  {Link} from "react-router-dom"
import TablePagination from '@mui/material/TablePagination';
import TableFooter from "@mui/material/TableFooter";
import axios from "axios";


const ProjectsTable = () => {
  const [projects,setProjects] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(()=>{

     axios.get("https://issuetracker-heroku2.herokuapp.com/api/projects/allProjects")
     .then((response)=>{
      setProjects(response.data)
     
     }) 
  },[])


  function DeleteProject(project){
      axios.delete(`https://issuetracker-heroku2.herokuapp.com/api/projects/${project.id}`)
      .then((response)=>{
        console.log(response)
        refreshPage();
    })
  }

  const refreshPage = ()=>{
    window.location.reload();
 }



  return (
    <div className="tableContainer">
      <div className="container">
       

        <TableContainer
      
          id="tableContainer"
          style={{
            width: "100%",
           
            // border: "1px solid black",
           
           
          }}
          component={Paper}
        >
          <div id="projectHeader"><span>Projects</span></div>

          <Table aria-label="simple table" >

            <TableHead>
              <TableRow className="project-descriptions">
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Projects</TableCell>
                <TableCell align="center">Descriptions</TableCell>
                <TableCell align="center">Contributors</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((project) => (
                <TableRow key={project.id}>
                  <TableCell align="center">{project.id}</TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {project.Project}
                  </TableCell>
                  <TableCell align="left">
                    {project.Project_Description}
                  </TableCell>
                  <TableCell align="center">{project.Contributors}</TableCell>
                  <TableCell align="center">
                    {
                      <div className="cellAction">
                        {/* <Link className="viewButton" 
                         to={`/home`}>
                         {/* to={`/${project.id}`}> 
                          View
                        </Link> */}

                        <Link
                          className="viewButton"
                           to={`/projects/updateproject/${project.id}`}
                         
                        >
                          Update
                        </Link>
                        <div className="deleteButton ">
                          <button className="deleteBtn" onClick={()=> DeleteProject(project)}>Delete</button> 
                          
                          </div>
                      </div>
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TableFooter>
            <div className="footerContainer">
              <div className="tablePagination">
          <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={projects.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>
      <div className="addProjectbtn">
        <a className="addProjectbtn" href="/projects/addProject">Add Project</a>
        </div>
        </div>
          </TableFooter>
        </TableContainer>

      </div>
    </div>
  );
};

export default ProjectsTable;
