import AuthService from "../../../Services/authServ";
import React from "react";
import {Outlet, Navigate} from "react-router-dom";


const ProtectedRoutes = () => {
     const user = AuthService.getCurrentUser();
    if(user.roles[0] === "ROLE_USER" ||  user.roles[0] === "ROLE_ADMIN"){
        return <Outlet />

    }else{
        return <Navigate to= "/" /> 
    }
    
   

}

const ProtectedRoutesAdmin = () =>{
    const user = AuthService.getCurrentUser();
    if(user.roles[0] === "ROLE_ADMIN"){
        return  <Outlet />
    }else{
        return <Navigate to= "/" /> 
        
    }
}



export  {ProtectedRoutes,ProtectedRoutesAdmin};