import {UserService} from '../services';

const INITIAL_STATE =UserService.setInitial();
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
            return UserService.getDefault();
            break;
    }
    return state;
}
