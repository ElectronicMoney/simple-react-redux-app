//Import all users action types here
import {
    GET_USERS,
    // GET_USER,
    // CREATE_USER,
    // UPDATE_USER,
    // DELETE_USER
} from '../../constants';

let payload = {
    users: [
        {id: 1, name: 'Emeka Augustine',  username: 'Emoney', email: 'emoney@gmail.com'},
        {id: 2, name: 'Emeka Augustine',  username: 'Emoney', email: 'emoney@gmail.com'},
        {id: 3, name: 'Emeka Augustine',  username: 'Emoney', email: 'emoney@gmail.com'},
    ]
}

export const getUsers = () => {
    return {
        type: GET_USERS,
        payload: payload
    }
}

// export const getUser = (payload) => {
//     return {
//         type: GET_USER,
//         payload: payload
//     }
// }


// export const createUser = (payload) => {
//     return {
//         type: CREATE_USER,
//         payload: payload
//     }
// }


// export const updateUser = (payload) => {
//     return {
//         type: UPDATE_USER,
//         payload: payload
//     }
// }

// export const deletUser = (payload) => {
//     return {
//         type: DELETE_USER,
//         payload: payload
//     }
// }