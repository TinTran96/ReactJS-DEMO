export const userLogin = (state,res)=>{
  console.log("Login Submit : ",state);
  
  return{
        type: "USER_LOGIN",
        payload: {user:state.user,res:res,}
      }
};

export const userLogout = ()=>{
    console.log("Logout Submit");

    return{
        type: "USER_LOGOUT",
        payload: {}
    }
};

export const chooseRest = (res)=>{
  console.log("Restaurant infor : ",res);
  
  return{
        type: "RES_LOGIN",
        payload: {res:res}
      }
};