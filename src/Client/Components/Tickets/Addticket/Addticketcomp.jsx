import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios"
import { useNavigate} from "react-router-dom";

function Addticketcomp() {
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
  const [title, setTitle] = useState("");
 const [author, setAuthor] = useState("");
 const [description, setDescription] = useState("");


 function postTicket(){
  axios.post("https://issuetracker-heroku2.herokuapp.com/api/tickets/addTickets",{
    Ticket_Title:title,
    Author:author,
    Description:description,
    Ticket_status:status,
    Ticket_type:type,
    Priority:priority


  })
  routeChange();
}

let navigate = useNavigate(); 
 const routeChange = () =>{ 
   let path = `/tickets`; 
   navigate(path);
 }

  const handleChange1 = (event) => {
    setStatus(event.target.value);
  };
  const handleChange2 = (event) => {
    setType(event.target.value);
  };
  const handleChange3 = (event) => {
    setPriority(event.target.value);
  };

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
            Add Ticket
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
                    onChange={(e)=>{setTitle(e.target.value)}}
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

                    onChange={(e)=>{setAuthor(e.target.value)}}
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
                    onChange={(e)=>{setDescription(e.target.value)}}
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
                onClick={postTicket}
              >
                Add Ticket
              </Button>

              <a style={{textDecoration:"none"}} href="/tickets">Return</a>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Addticketcomp;
