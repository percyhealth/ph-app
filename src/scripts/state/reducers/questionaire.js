import {ActionTypes} from '../actions';

// initial state
const initialState = {
  questionaires: null,
};

// reducer
const QuestionairesReducer = (state = initialState, action) => {
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
