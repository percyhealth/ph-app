import {ActionTypes} from '../actions';

// initial state
const initialState = {
  questionaires: null,
  questionaire: null,
};

// reducer
const QuestionairesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_QUESTIONAIRES:
      return {...state, questionaires: action.payload};
    case ActionTypes.GET_ONE_QUESTIONAIRE:
      return {...state, questionaire: action.payload};
    // case ActionTypes.LOGOUT:
    //   return {...initialState};
    default:
      return state;
  }
};

export default QuestionairesReducer;
