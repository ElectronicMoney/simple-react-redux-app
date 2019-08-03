import { config } from '../../api/config';
//Import all POSTs action types here
// import {
//     GET_POSTS,
//     // GET_POST,
//     // CREATE_POST,
//     // UPDATE_POST,
//     // DELETE_POST
// } from '../../constants';


// let payload = {
//     users: [
//         {id: 1, title: 'Best Blog', body: 'I hate nonsense'},
//         {id: 2, title: 'testing Blog', body: 'I love ES6'},
//     ]
// }

// export const getPosts = () => async (dispatch) => {
//     const response =  await config.get('/posts');
//     dispatch( { type: GET_POSTS, payload:response.data })
// }


/**
 * Every action that has API calls usually goes 
 * through three stages in an app. 
 * Loading state -> GET_POSTS_LOADING
 * Success -> GET_POSTS_SUCCESS
 * Failure -> GET_POSTS_FAILURE
 * Maintaining these action types helps us check the data flow when an API
 * is called in our app.
 */

export const getPosts = () => async (dispatch) => {  
    // Initiate loading state    
    dispatch({ type: 'GET_POSTS_LOADING' });

    try {      
        // Make an API Call    
        const response =  await config.get('/posts');          
        // Update payload in reducer on success 
        dispatch( { type: 'GET_POSTS_SUCCESS', payload: response.data });   
    } catch (error) {     
        // Update error in reducer on failure           
        dispatch({        
            type: 'GET_POSTS_FAILURE',        
            error: error      
        });    
    }  
}





// export const getPost = (payload) => {
//     return {
//         type: GET_POST,
//         payload: payload
//     }
// }


// export const createPost = (payload) => {
//     return {
//         type: CREATE_POST,
//         payload: payload
//     }
// }


// export const updatePost = (payload) => {
//     return {
//         type: UPDATE_POST,
//         payload: payload
//     }
// }

// export const deletPost = (payload) => {
//     return {
//         type: DELETE_POST,
//         payload: payload
//     }
// }