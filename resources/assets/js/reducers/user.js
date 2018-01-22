
const INITIAL_STATE ={
                    name:"",
                    email:""
                    };
export default function(state=INITIAL_STATE,action){
    switch(action.type)
    {
        case "USER_LOGIN":
            console.log("Meme action",action.payload);
            return{
                user:action.payload.user,
                res:action.payload.res,
            };
            break;
            
    }
    return state;
}