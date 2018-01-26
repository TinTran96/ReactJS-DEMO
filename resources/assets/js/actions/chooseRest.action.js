
export const chooseRest = (res)=>{
  console.log("Restaurant infor : ",res);
  
  return{
        type: "RES_LOGIN",
        payload: {res:res}
      }
};