
export const userLogin = (state,res)=>{
  console.log("Login Submit : ",state);
  var param={userInfo:state.user,resInfo:res};
  localStorage.setItem('user_store',JSON.stringify(param)); 
  return{
        type: "USER_LOGIN",
        payload: {user:state.user,res:res,}
      }
};

export const userLogout = ()=>{
    console.log("Logout Submit");
    
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_store');
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

export const setToken = (token)=>{
  console.log("Set token", token);
  if(token){     
      //Impementing the Key and IV and encrypt the password
      // var encryptedToken = CryptoJS.AES.encrypt(token, this.KEY, {iv: this.IV});  
      // console.log('encrypted ', encryptedToken.toString());     
      localStorage.setItem('id_token', token); 
    } else {
      // window.sessionStorage.removeItem('token');
      localStorage.removeItem('id_token');
    }
  return{
        type: "SET_TOKEN",
        payload: true,
      }
};
