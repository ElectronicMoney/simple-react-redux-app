import { combineReducers } from 'redux';
import { userManagement } from './userManagement';
import { postManagement } from './postManagement';

//You can combine all your reducers using combineReducers
//imported from redux library

export default combineReducers({
    users: userManagement,
    posts: postManagement
});
