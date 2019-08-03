import { config } from '../../../api/config';
import { DataActionTypes } from '../../../constants/data/DataActionTypes';

/**
 * Every action that has API calls usually goes 
 * through three stages in an app. 
 * Loading state -> GET_USERS_LOADING
 * Success -> GET_USERS_SUCCESS
 * Failure -> GET_USERS_FAILURE
 * Maintaining these action types helps us check the data flow when an API
 * is called in our app.
 */

export const getUsers = () => async (dispatch) => {  
    // Initiate loading state    
    dispatch({ type: DataActionTypes.GET_USERS_LOADING });

    try {      
        // Make an API Call    
        const response =  await config.get('/users');          
        // Update payload in reducer on success 
        dispatch( { type: DataActionTypes.GET_USERS_SUCCESS, payload: response.data });   
    } catch (error) {     
        // Update error in reducer on failure           
        dispatch({        
            type: DataActionTypes.GET_USERS_FAILURE,        
            error: error      
        });    
    }  
}