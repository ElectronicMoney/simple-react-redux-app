import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { postsReducer } from './postsReducer';

//You can combine all your reducers using combineReducers
//imported from redux library

export default combineReducers({
    users: userReducer,
    posts: postsReducer
});
