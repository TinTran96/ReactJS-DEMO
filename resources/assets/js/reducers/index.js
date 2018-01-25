import {combineReducers} from 'redux';
import User from './user'
import Auth from './auth'
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    user:User,
    auth:Auth,
});

export default allReducers