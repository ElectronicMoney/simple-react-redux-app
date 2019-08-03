//Import all users action types here
import {
    GET_POSTS,
    // GET_USER,
    // CREATE_USER,
    // UPDATE_USER,
    // DELETE_USER
} from '../constants';

//Reducer take an action and initialSate as imput and return 
//an objet of type and payload properties (new state)

const initialState = null;

export const postManagement = (state=initialState, action) => {
    switch(action.type) {
        case GET_POSTS:
            return [...action.payload];
        default:
            return state;
    }   
}