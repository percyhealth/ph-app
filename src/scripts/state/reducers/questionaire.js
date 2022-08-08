import {ActionTypes} from '../actions';

// initial state
const initialState = {
  questionaires: null,
};

// reducer
const QuestionairesReducer = (state = initialState, action) => {
  console.log('src/scripts/state/reducers/questionaire.js-----line 10', action);
  switch (action.type) {
    case ActionTypes.QUESTIONAIRE:
      return {...state, questionaires: action.payload};
    // case ActionTypes.LOGOUT:
    //   return {...initialState};
    default:
      return state;
  }
};

export default QuestionairesReducer;
