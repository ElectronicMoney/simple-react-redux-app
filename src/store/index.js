import { createStore } from 'redux';
import reducers from '../reducers';
import { thunkMiddleware } from '../middlewares';

//Then you can create a store
export default createStore(reducers, thunkMiddleware);