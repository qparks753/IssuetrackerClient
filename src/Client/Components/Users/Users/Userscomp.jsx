import React, { useEffect, useState } from "react";
import "./Userscomp.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";
import TableFooter from "@mui/material/TableFooter";
import axios from "axios"



function Userscomp() {
  const [users, setUsers] = useState([]);
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

    axios.get("https://issuetracker-heroku2.herokuapp.com/api/users/allUsers")
    .then((response)=>{
     setUsers(response.data)
    
    }) 
 },[])

 function DeleteUser(user){
  axios.delete(`https://issuetracker-heroku2.herokuapp.com/api/users/${user.id}`)
  .then((response)=>{
    console.log(response)
})
refreshPage();
}
const refreshPage = ()=>{
  window.location.reload();
}




  return (
    <div>
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
            <div className="userHeader">
              <span>Users</span>
            </div>

            <Table aria-label="simple table">
              <TableHead>
                <TableRow className="project-descriptions">
                  <TableCell align="center">ID</TableCell>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Phone</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user) => (
                    <TableRow key={user.id}>
                      <TableCell align="center">{user.id}</TableCell>
                      <TableCell align="center" component="th" scope="row">
                        {user.FirstName}
                      </TableCell>
                      <TableCell align="center">
                        {user.LastName}
                      </TableCell>
                      <TableCell align="center">
                        {user.Email}
                      </TableCell>
                      <TableCell align="center">
                        {user.Phone}
                      </TableCell>
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
                               to={`/users/updateuser/${user.id}`}
                             
                            >
                              Update
                            </Link>
                            <div className="deleteButton ">
                            <button className="deleteBtn" onClick={()=> DeleteUser(user)}>Delete</button> 
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
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </div>
                <div className="addUserbtn">
                  <a className="addUserbtn" href="/users/addUser">
                    Add User
                  </a>
                </div>
              </div>
            </TableFooter>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Userscomp;
