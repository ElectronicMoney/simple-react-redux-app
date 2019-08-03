import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//export the thunk middleware
export const thunkMiddleware = applyMiddleware(thunk);