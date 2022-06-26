import React ,{useState,useEffect}from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";


function Updateusercomp() {

  const userID = useParams();
 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
   const [userData, setUserData] = useState([]);

  useEffect(()=>{

    axios.get(`https://issuetracker-heroku2.herokuapp.com/api/users/${userID.id}`)
    .then((response)=>{
     setUserData(response.data)
     console.log(response.data)
     
    }) 

 },[userID])

 const handleChange1 = (event) => {
  setFirstName(event.target.value);
};
const handleChange2 = (event) => {
  setLastName(event.target.value);
};
const handleChange3 = (event) => {
  setEmail(event.target.value);
};
const handleChange4 = (event) => {
  setPhone(event.target.value);
};

  
function updateuser () {
   const data ={
     "FirstName": firstName,
     "LastName": lastName,
     "Email": email,
     "Phone": phone
   }

  axios.put(`https://issuetracker-heroku2.herokuapp.com/api/users/${userID.id}`, data)
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
   let path = `/users`; 
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
            {" "}
            Update User
          </div>
          <Box component="form" noValidate sx={{ mt: 3, mr: 7 }}>
            <div className="inputContainer">
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <TextField
                    autoComplete="given-name"
                    name="First Name"
                    required
                    fullWidth
                    id="FirstName"
                    label="First Name"
                    InputLabelProps={{ shrink: true }}  
                    autoFocus
                     contentEditable="true" 
                    placeholder={userData.FirstName}
                   onChange={handleChange1}
                  />
                </Grid>

                <Grid item xs={5}>
                  <TextField
                    required
                    fullWidth
                    id="LastName"
                    label="Last Name"
                    InputLabelProps={{ shrink: true }}  
                    name="Last Name"
                    autoComplete="Last Name"
                    placeholder={userData.LastName}
                    onChange={handleChange2}
                    // onChange={handleContributorsChange}
                  />
                </Grid>

                <Grid item xs={5}>
                  <TextField
                    required
                    fullWidth
                    id="Email"
                    label="Email"
                    InputLabelProps={{ shrink: true }}  
                    name="Email"
                    autoComplete="Email"
                    placeholder={userData.Email}
                    onChange={handleChange3}
                    // onChange={handleContributorsChange}
                  />
                </Grid>

                <Grid item xs={5}>
                  <TextField
                    required
                    fullWidth
                    id="Phone"
                    label="Phone Number"
                    InputLabelProps={{ shrink: true }}  
                    name="Phone"
                    autoComplete="Phone"
                    placeholder={userData.Phone}
                    style={{marginLeft:"15px"}}
                    onChange={handleChange4}
                    // onChange={handleContributorsChange}
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

            <div
              className="btndiv"
              style={{ display: "flex", justifyContent: "center", alignItems:"center", flexDirection:"column" }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ maxWidth: "30%" }}
                onClick={updateuser}
              >
                Update User
              </Button>
              <a style={{textDecoration:"none"}} href="/users">Return</a>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Updateusercomp;
