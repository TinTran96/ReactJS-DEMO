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