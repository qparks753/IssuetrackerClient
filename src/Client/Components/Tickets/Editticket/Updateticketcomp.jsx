import React, { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";

function Updateticketcomp() {
  const Status = [
    {
      value: "OPEN",
      label:"OPEN"
    },
    {
      value: "CLOSED",
      label:"CLOSED"
    },
    {
      value: "IN PROGRESS",
      label:"IN PROGRESS"
    },
  ];

  const Type = [
    {
      value: "ISSUE",
      label:"ISSUE"
    },
    {
      value: "BUG",
      label:"BUG"
    },
    {
      value: "FEATURE REQUEST",
      label:"FEATURE REQUEST"

    },
  ];

  const Priority = [
    {
      value: "HIGH",
      label:"HIGH"
    },
    {
      value: "MEDIUM",
      label:"MEDIUM"
    },
    {
      value: "LOW",
      label:"LOW"
    },
    {
      value: "IMMEDIATE",
      label:"IMMEDIATE"
    },
  ];
  const [status, setStatus] = useState("OPEN");
  const [type, setType] = useState("BUG");
  const [priority, setPriority] = useState("LOW");

  const handleChange1 = (event) => {
    setStatus(event.target.value);
  };
  const handleChange2 = (event) => {
    setType(event.target.value);
  };
  const handleChange3 = (event) => {
    setPriority(event.target.value);
  };

  const handleChange4 = (event) => {
    setTitle(event.target.value);
  };
  const handleChange5 = (event) => {
    setAuthor(event.target.value);
  };
  const handleChange6 = (event) => {
    setDescription(event.target.value);
  };
  
  

  const ticketID = useParams();
   
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [ticketData, setTicketData] = useState([]);

  useEffect(()=>{

    axios.get(`https://issuetracker-heroku2.herokuapp.com/api/tickets/${ticketID.id}`)
    .then((response)=>{
     setTicketData(response.data)
     
     
    }) 

 },[ticketID])

 function updateTicket () {
  const data ={
    "Ticket_Title": title,
    "Author": author,
    "Description": description,
    "Ticket_status": status,
    "Ticket_type": type,
    "Priority": priority

  }

 axios.put(`https://issuetracker-heroku2.herokuapp.com/api/tickets/${ticketID.id}`, data)
 .then((data)=> {
   console.log(data);
   
   })
   .catch((err) =>{
     console.log(err);
 })

 routeChange();

}

let navigate = useNavigate(); 
 const routeChange = () =>{ 
   let path = `/tickets`; 
   navigate(path);
 }




  return (
    <div>
      <div
        className="formContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginLeft: "30px",
          marginTop:"25px"
        }}
      >
        <Box component="form" sx={{ "& .MuiTextField-root": { m: 1 } }}>
          <div
            className="titleDiv"
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "25px",
              marginRight: "100px",
            }}
          >
            Update Ticket
          </div>
          <Box component="form" noValidate sx={{ mt: 3, mr: 7 }}>
            <div className="inputContainer">
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <TextField
                    autoComplete="given-name"
                    name="Ticket Title"
                    required
                    fullWidth
                    id="Ticket_Title"
                    label="Ticket Title"
                    autoFocus
                    placeholder={ticketData.Ticket_Title}
                    onChange={handleChange4}
                    InputLabelProps={{ shrink: true }}
                    // onChange={handleProjectChange}
                  />
                </Grid>

                <Grid item xs={5}>
                  <TextField
                    required
                    fullWidth
                    id="Author"
                    label="Author"
                    name="Author"
                    autoComplete="Author"
                    placeholder={ticketData.Author}
                    onChange={handleChange5}
                    InputLabelProps={{ shrink: true }}

                    // onChange={handleContributorsChange}
                  />
                </Grid>

                <Grid item xs={10}>
                  <TextField
                    required
                    fullWidth
                    id="filled-multiline-flexible"
                    label=" Description"
                    name="Description"
                    autoComplete="Description"
                    multiline
                    rows={3}
                    placeholder={ticketData.Description}
                    onChange={handleChange6}
                    InputLabelProps={{ shrink: true }}
                    // onChange={handleContributorsChange}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="Status"
                    select
                    label="Ticket Status"
                    value={status}
                    onChange={handleChange1}
                    helperText="Please select Ticket Status"
                  >
                    {Status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="Type"
                    select
                    label="Ticket Type"
                    value={type}
                    onChange={handleChange2}
                    helperText="Please select Ticket Type"
                  >
                    {Type.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    id="Priority"
                    select
                    label="Priority"
                    value={priority}
                    onChange={handleChange3}
                    helperText="Please select Ticket Priority"
                  >
                    {Priority.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </div>

            <div
              className="btndiv"
              style={{ display: "flex",alignItems:"center",flexDirection:"column", justifyContent: "center" }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ maxWidth: "30%" }}
                onClick={updateTicket}
              >
                Update Ticket
              </Button>
              <a style={{textDecoration:"none"}} href="/tickets">Return</a>
              
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Updateticketcomp;