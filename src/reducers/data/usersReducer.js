import { DataActionTypes } from '../../constants/data/DataActionTypes';

//Initialize state
const initialState = {  payload: [],  isLoading: false,  error: {}};

export const usersReducer = ( state=initialState, action ) => { 	 
    switch(action.type) {    
        case DataActionTypes.GET_USERS_LOADING:      
            return {        
                ...state,        
                isLoading: true    
            };        
        case DataActionTypes.GET_USERS_SUCCESS:      
            return {        
                ...state,        
                payload: action.payload,        
                isLoading: false      
            };        
        case DataActionTypes.GET_USERS_FAILURE:      
            return {        
                ...state,        
                error: action.error,        
                isLoading: false            
            };           
        default:      
            return state;
    }
}