import { combineReducers } from 'redux';
import { usersReducer } from './data/usersReducer';
import { postsReducer } from './data/postsReducer';

//You can combine all your reducers using combineReducers
//imported from redux library

export default combineReducers({
    users: usersReducer,
    posts: postsReducer
});
