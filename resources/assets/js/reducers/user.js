var user = localStorage.getItem('user_store');
var state = {
                userInfo:{
                    
                },
                resInfo:{
                    name:"",
                    logo_path:"",
                }
            }; 
if(user != undefined && user != null) {
    state = JSON.parse(user);
}
const INITIAL_STATE =state;
export default function(state=INITIAL_STATE,action){
    switch(action.type)
    {
        case "USER_LOGIN":
            console.log("Meme action",action.payload);
            return{
                userInfo:action.payload.user,
                resInfo:action.payload.res,
            };
            break;
        case "USER_LOGOUT":
            console.log("Log out action");
            return {
                userInfo:{
                    
                },
                resInfo:{
                    name:"",
                    logo_path:"",
                }
            }; 
            break;
    }
    return state;
}