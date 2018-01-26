export const userLogout = ()=>{
    console.log("Logout Submit");
    
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_store');
    return{
        type: "USER_LOGOUT",
        payload: {}
    }
};