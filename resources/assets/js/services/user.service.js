import axios from 'axios'
export const UserService = {
    setInitial,
    getDefault,
    userLogin,
};

const INITIAL_USER = {
            userInfo:{
                
            },
            resInfo:{
                name:"",
                logo_path:"",
            }
        }; 

/**
 * Set Initial State for user if user already login
 */
function setInitial()
{
    var user = localStorage.getItem('user_store');
    if(user != undefined && user != null) {
        return JSON.parse(user);
    }
    return INITIAL_USER;
    
}

/**
 * Get default const INITIAL_USER
 */
function getDefault()
{
    return INITIAL_USER;
}

/**
 * Login to API, get TOKEN
 * @param {username,password} param 
 */
function userLogin(param)
{
    var url ="http://api.mysite.local:8000/login";
    return axios.post(url, param) // return here
      .then(response => response.data)
      .catch(error => error)
}