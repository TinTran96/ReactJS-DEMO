/**
 * Set app state user and restaurant
 * @param {*} state 
 * @param {*} res 
 */
export const userLogin = (state,res)=>{
  console.log("Login Submit : ",state);
  var param={userInfo:state.user,resInfo:res};
  localStorage.setItem('user_store',JSON.stringify(param)); 
  return{
        type: "USER_LOGIN",
        payload: {user:state.user,res:res,}
      }
};