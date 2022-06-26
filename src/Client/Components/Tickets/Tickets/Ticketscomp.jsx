import React, { useEffect, useState} from "react";
import "./Ticketscomp.css";
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


function Ticketscomp() {
  const [tickets, setTickets] = useState([]);
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

    axios.get("https://issuetracker-heroku2.herokuapp.com/api/tickets/allTickets")
    .then((response)=>{
     setTickets(response.data)
    
    }) 
 },[])




 function DeleteTicket(ticket){
  axios.delete(`https://issuetracker-heroku2.herokuapp.com/api/tickets/${ticket.id}`)
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
            <div className="ticketHeader">
              <span>Tickets</span>
            </div>

            <Table aria-label="simple table">
              <TableHead>
                <TableRow className="project-descriptions">
                  <TableCell align="center">ID</TableCell>
                  <TableCell align="center">Ticket Title</TableCell>
                  <TableCell align="center">Author</TableCell>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">Ticket Status</TableCell>
                  <TableCell align="center">Ticket Type</TableCell>
                  <TableCell align="center">Priority</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tickets
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell align="center">{ticket.id}</TableCell>
                      <TableCell align="center" component="th" scope="row">
                        {ticket.Ticket_Title}
                      </TableCell>
                      <TableCell align="center">
                        {ticket.Author}
                      </TableCell>
                      <TableCell align="center">
                        {ticket.Description}
                      </TableCell>
                      <TableCell align="center">
                        {ticket.Ticket_status}
                      </TableCell>
                      <TableCell align="center">
                        {ticket.Ticket_type}
                      </TableCell>
                      <TableCell align="center">
                        {ticket.Priority}
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
                               to={`/tickets/updateticket/${ticket.id}`}
                             
                            >
                              Update
                            </Link>
                            <div className="deleteButton ">
                            <button class="deleteBtn" onClick={()=> DeleteTicket(ticket)}>Delete</button> 
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
                    count={tickets.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </div>
                <div className="addTicketbtn">
                  <a className="addTicketbtn" href="/tickets/addTicket">
                    Add Ticket
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

export default Ticketscomp;
