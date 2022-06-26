import axios from "axios"

const getPublicContent =() =>{
    return axios.get("https://issuetracker-heroku2.herokuapp.com/api/test/all")
}

const getUserBoard = () =>{
    return axios.get("https://issuetracker-heroku2.herokuapp.com/api/test/user")
}

const getModeratorBoard = () => {
    return axios.get("https://issuetracker-heroku2.herokuapp.com/api/test/mod");
};

const getAdminBoard = () => {
    return axios.get("https://issuetracker-heroku2.herokuapp.com/api/test/admin");
};

const DataService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
}
  
export default DataService;