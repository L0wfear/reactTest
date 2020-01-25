import {combineReducers, createStore, applyMiddleware} from 'redux';
import usersReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk';
import dataReducer from './dataReducer';
import currentStringReducer from './currentStringReducer';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    usersData: usersReducer,
    isData: dataReducer,
    form: formReducer,
    currentString: currentStringReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;