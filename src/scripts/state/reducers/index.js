import {combineReducers} from 'redux';
import questionairesReducer from './questionaire';

const rootReducer = combineReducers({
  questionairesReducer,
});

export default rootReducer;
