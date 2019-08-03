//Import all POSTs action types here
import {
    GET_POSTS,
    GET_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST
} from '../constants';


export const getPOSTs = (payload) => {
    return {
        type: GET_POSTS,
        payload: payload
    }
}

export const getPOST = (payload) => {
    return {
        type: GET_POST,
        payload: payload
    }
}


export const createPOST = (payload) => {
    return {
        type: CREATE_POST,
        payload: payload
    }
}


export const updatePOST = (payload) => {
    return {
        type: UPDATE_POST,
        payload: payload
    }
}

export const deletPOST = (payload) => {
    return {
        type: DELETE_POST,
        payload: payload
    }
}