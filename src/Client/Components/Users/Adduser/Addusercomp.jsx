import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Addusercomp() {
  const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
 
  
 function postUser(){
  axios.post("https://issuetracker-heroku2.herokuapp.com/api/users/addUser",{
    FirstName:firstName,
    LastName:lastName,
    Email:email,
    Phone: phone
  })
  routeChange();
}

let navigate = useNavigate(); 
 const routeChange = () =>{ 
   let path = `/users`; 
   navigate(path);
 }
  return (
    <div>
      <div className="formContainer" style={{display:"flex", justifyContent:"center", width:"100%", marginLeft:"30px"}}>
    
    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 },}}>
    <div className="titleDiv" style={{display:"flex", justifyContent:"center", fontSize:"25px", marginRight:"100px"}} >Add User</div>
    <Box component="form" noValidate  sx={{ mt: 3,mr:7 }}    >
      
           <div className="inputContainer" >
           <Grid container spacing={2}>
             <Grid item xs={5} >
               <TextField
                 autoComplete="given-name"
                 name="First Name"
                 required
                 fullWidth
                 id="FirstName"
                 label="First Name"
                 autoFocus
                 onChange={(e)=>{setFirstName(e.target.value)}}
               />
             </Grid>


              
             <Grid item xs={5} >
               <TextField
                 required
                 fullWidth
                 id="LastName"
                 label="Last Name"
                 name="Last Name"
                 autoComplete="Last Name"
                 
                 onChange={(e)=>{setLastName(e.target.value)}}
                
               />
             </Grid>

              
             <Grid item xs={5} >
               <TextField
                 required
                 fullWidth
                 id="Email"
                 label="Email"
                 name="Email"
                 autoComplete="Email"
                 
                 onChange={(e)=>{setEmail(e.target.value)}}
                
               />
             </Grid>

              
             <Grid item xs={5} >
               <TextField
                 required
                 fullWidth
                 id="Phone"
                 label="Phone Number"
                 name="Phone"
                 autoComplete="Phone"
                 
                 onChange={(e)=>{setPhone(e.target.value)}}
                
               />
             </Grid>

             {/* <Grid item xs={10} >
               <TextField
                 required
                 fullWidth
                 id="filled-multiline-flexible"
                 label="Project Description"
                 name="Project_Description"
                 autoComplete="Contributors"
                 multiline
                 rows={6}
                 // onChange={handleContributorsChange}
                
               />
             </Grid> */}

           </Grid>
           </div>

          <div className="btndiv"  style={{display:"flex",flexDirection:"column", alignItems:"center" ,justifyContent:"center"}}>
           <Button
             type="submit"
             fullWidth
             variant="contained"
             sx={{ mt: 3, mb: 2 }}
             style={{maxWidth:"30%"}}
             onClick={postUser}
           >
             Add User
           </Button>

           <a style={{textDecoration:"none"}} href="/users">Return</a>
           </div>
 
         </Box>



      
       


       
       </Box>

      
  </div>
    </div>
  )
}

export default Addusercomp