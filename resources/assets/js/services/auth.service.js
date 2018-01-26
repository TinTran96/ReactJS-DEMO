var jwtDecode = require('jwt-decode');

export const AuthService = {
    checkExpire,
    setInitial,
};


function checkExpire(token)
{
    console.log("DECODE",jwtDecode(token).exp);
    if (jwtDecode(token).exp < Date.now() / 1000) {
        localStorage.clear();
        return true;
    }
    return false;
}

function setInitial()
{
    var token = localStorage.getItem('id_token');
    var state = false; 
    if(token != undefined && token != null) {
        if(!checkExpire(token));
        {
            state = true;
        }
    }
    return state;
}