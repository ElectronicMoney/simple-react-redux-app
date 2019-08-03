//Import all users action types here
import {
    // GET_POSTS,
    GET_POSTS_LOADING,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE
    // GET_USER,
    // CREATE_USER,
    // UPDATE_USER,
    // DELETE_USER
} from '../constants';

//Reducer take an action and initialSate as imput and return 
//an objet of type and payload properties (new state)

// const initialState = null;

// export const postManagement = (state=initialState, action) => {
//     switch(action.type) {
//         case GET_POSTS:
//             return [...action.payload];
//         default:
//             return state;
//     }   
// }

//Initialize state
const initialState = {  payload: [],  isLoading: false,  error: {}};

export const postsReducer = ( state=initialState, action ) => { 	 
    switch(action.type) {    
        case GET_POSTS_LOADING:      
            return {        
                ...state,        
                isLoading: true    
            };        
        case GET_POSTS_SUCCESS:      
            return {        
                ...state,        
                payload: action.payload,        
                isLoading: false      
            };        
        case GET_POSTS_FAILURE:      
            return {        
                ...state,        
                error: action.error,        
                isLoading: false            
            };           
        default:      
            return state;
    }
}