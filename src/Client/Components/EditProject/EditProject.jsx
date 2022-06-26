import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useParams,useNavigate}from "react-router-dom"

const EditProject = () => {
  const [project, setProject] = useState("");
 const [contributors, setContributors] = useState("");
 const [description, setDescription] = useState("");
 const [projectData, setProjectData] = useState([]);

 const projectID = useParams();


 useEffect(()=>{

  axios.get(`https://issuetracker-heroku2.herokuapp.com/api/projects/${projectID.id}`)
  .then((response)=>{
   setProjectData(response.data)
   console.log(response.data)
   
  }) 

},[projectID])


  function updateProject(){
    const data ={
      "Project": project,
      "Contributors": contributors,
      "Project_Description": description
    }

    axios.put(`https://issuetracker-heroku2.herokuapp.com/api/projects/${projectID.id}`, data)
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
   let path = `/projects`; 
   navigate(path);
 }



  return (
   <div className="formContainer" style={{display:"flex", justifyContent:"center", width:"100%", marginLeft:"30px", marginTop:"20px"}}>
    
     <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 },}}>
     <div className="titleDiv" style={{display:"flex", justifyContent:"center", fontSize:"25px", marginRight:"100px"}} >Update Project</div>
     <Box component="form" noValidate  sx={{ mt: 3,mr:7 }}    >
       
            <div className="inputContainer" >
            <Grid container spacing={2}>
              <Grid item xs={5} >
                <TextField
                  autoComplete="given-name"
                  name="Project"
                  
                  fullWidth
                  id="Project"
                  label="Project Title"
                  autoFocus
                   onChange={(e)=>{setProject(e.target.value)}}
                   placeholder={projectData.Project}
                   InputLabelProps={{ shrink: true }}  
                />
              </Grid>


               
              <Grid item xs={5} >
                <TextField
                  
                  fullWidth
                  id="Contributors"
                  label="Contributors"
                  name="Contributors"
                  autoComplete="Contributors"
                  placeholder={projectData.Contributors}
                  InputLabelProps={{ shrink: true }}  
                  onChange={(e)=>{setContributors(e.target.value)}}
                 
                />
              </Grid>

              <Grid item xs={10} >
                <TextField
                  
                  fullWidth
                  id="filled-multiline-flexible"
                  label="Project Description"
                  name="Project_Description"
                  autoComplete="Project Description"
                  multiline
                  rows={6}
                  placeholder={projectData.Project_Description}
                  InputLabelProps={{ shrink: true }}  
                  onChange={(e)=>{setDescription(e.target.value)}}
                 
                />
              </Grid>

            </Grid>
            </div>

           <div className="btndiv"  style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{maxWidth:"35%"}}
               onClick={updateProject}
              
            >
              Update Project
            </Button>

              <a style={{textDecoration:"none"}} href="/projects">Return</a>
            
            </div>
  
          </Box>
 


       
        


        
        </Box>

       
   </div>
  )
}

export default EditProject