var jwtDecode = require('jwt-decode');
import {AuthService} from '../services'

const INITIAL_STATE = AuthService.setInitial();
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