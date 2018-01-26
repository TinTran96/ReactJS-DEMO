/**
 * Set localStorage token
 * @param {*} token 
 */
export const setToken = (token)=>{
  if(token){  
      localStorage.setItem('id_token', token); 
    } else {
      localStorage.removeItem('id_token');
    }
  return{
        type: "SET_TOKEN",
        payload: true,
      }
};