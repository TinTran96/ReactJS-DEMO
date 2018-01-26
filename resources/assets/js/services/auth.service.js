var jwtDecode = require('jwt-decode');

export const AuthService = {
    checkExpire,
    setInitial,
};

/**
 * Check Expire decode JWT
 * @param {*} token 
 */
function checkExpire(token)
{
    if (jwtDecode(token).exp < Date.now() / 1000) {
        //Expire, clear localStorage
        localStorage.clear();
        return true;
    }
    return false;
}

/**
 * Check Token and check Expire from localStorage
 */
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