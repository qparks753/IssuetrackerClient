import Home from "./Client/Pages/Home/Home"
import AddProject from "./Client/Pages/Projects/AddProject.jsx"

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Updateproject from "./Client/Pages/Projects/Updateproject";
import Users from "./Client/Pages/Users/Users";
import Updateuser from "./Client/Pages/Users/Updateuser"
import Adduser from "./Client/Pages/Users/Adduser";
import Tickets from "./Client/Pages/Tickets/Tickets";
import Addticket from "./Client/Pages/Tickets/Addticket";
import Updateticket from "./Client/Pages/Tickets/Updateticket";
import PageNotFound from "./Client/Pages/PageNotFound/PageNotFound.jsx";
import Login from "./Client/Components/Auth/Login"
import Register from "./Client/Components/Auth/Register"
import Profile from "./Client/Components/Auth/Profile"
import BoardAdmin from "./Client/Components/Admin/Admin"
import NewHome from "./Client/Pages/NewHome/NewHome";
import {ProtectedRoutes,ProtectedRoutesAdmin} from "./Client/Components/Auth/ProtectedRoutes.js";

function App() {

    return (
      <div className="App">
        
        <BrowserRouter>
        <Routes>  

           {/*project*/}
          <Route path="/">
          <Route index element={<NewHome />} />
         </Route>

         <Route element={<ProtectedRoutes />}>
         
         <Route path="/projects" element ={<Home />}/>
         <Route path="/projects/addproject" element ={<AddProject />}/>
         <Route path="/projects/updateproject/:id" element ={<Updateproject />}/>
         

         {/*Tickets*/}
         <Route path="/tickets" element ={<Tickets />}/>
         <Route path="/tickets/updateticket/:id" element ={<Updateticket />}/>
         <Route path="/tickets/addticket" element ={<Addticket />}/>
           
           {/*OTHERS*/}
           <Route exact path="/profile" element ={<Profile/>}/>
         </Route>

                        {/*OTHERS*/}
         <Route exact path="/register" element ={<Register/>}/>
        <Route exact path="/login" element ={<Login/>}/>
        <Route path="*" element ={<PageNotFound/>}/>
         <Route path="*" element ={<PageNotFound/>}/>
                        
                       <Route>
                              {/*Admin*/}
          <Route element={<ProtectedRoutesAdmin />}>
         <Route path="/admin" element={<BoardAdmin />} />
          {/*Users*/}
          <Route path="/users" element ={<Users />}/>
         <Route path="/users/updateuser/:id" element ={<Updateuser />}/>
         <Route path="/users/adduser" element ={<Adduser />}/>
         </Route>
                       </Route>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;

