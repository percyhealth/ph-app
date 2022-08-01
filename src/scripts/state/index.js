import {legacy_createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// consider implementing the updated redux tool kit: https://redux.js.org/introduction/why-rtk-is-redux-today
export default legacy_createStore(reducers, applyMiddleware(thunk));
