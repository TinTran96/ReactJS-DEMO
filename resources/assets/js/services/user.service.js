export const UserService = {
    setInitial,
    getDefault
};

const INITIAL_USER = {
            userInfo:{
                
            },
            resInfo:{
                name:"",
                logo_path:"",
            }
        }; 

function setInitial()
{
    var user = localStorage.getItem('user_store');
    if(user != undefined && user != null) {
        return JSON.parse(user);
    }
    return INITIAL_USER;
    
}

function getDefault()
{
    return INITIAL_USER;
}