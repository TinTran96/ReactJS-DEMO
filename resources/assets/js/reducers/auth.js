var token = localStorage.getItem('id_token');
console.log("Token reducer",token);
var state = false; 
if(token != undefined && token != null) {
    state = true;
}   
const INITIAL_STATE = state;
export default function(state=INITIAL_STATE,action){
    switch(action.type)
    {
        case "SET_TOKEN":
            console.log("Reducer Authen",action.payload)
            return action.payload
            break;
    }
    return state;
}