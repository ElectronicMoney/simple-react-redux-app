import { config } from '../../api/config';
//Import all POSTs action types here
import {
    GET_POSTS,
    // GET_POST,
    // CREATE_POST,
    // UPDATE_POST,
    // DELETE_POST
} from '../../constants';


// let payload = {
//     users: [
//         {id: 1, title: 'Best Blog', body: 'I hate nonsense'},
//         {id: 2, title: 'testing Blog', body: 'I love ES6'},
//     ]
// }

export const getPosts = () => async (dispatch) => {
    const response =  await config.get('/posts');
    dispatch( { type: GET_POSTS, payload:response.data })
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