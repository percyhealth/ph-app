import * as QuestionaireService from '../../services/questionaire';

export const ActionTypes = {
  GET_QUESTIONAIRES: 'GET_QUESTIONAIRES',
  API_ERROR: 'API_ERROR',
};
export const getQuestionaires = () => {
  return async dispatch => {
    try {
      console.log('init await getQuestionaires');
      const questionaires = await QuestionaireService.getQuestionaires();
      console.log(
        'src/scripts/state/actions/questionaire.js ----- line 11:',
        questionaires,
      );
      dispatch({
        type: ActionTypes.GET_QUESTIONAIRES,
        payload: questionaires.data,
      });
    } catch (error) {
      dispatch({type: ActionTypes.API_ERROR, payload: error});
    }
  };
};

// export const createQuestionaire = name => {
//   return async dispatch => {
//     try {
//       await QuestionaireService.createQuestionaire(name);
//       try {
//         const questionaires = await QuestionaireService.getQuestionaires();
//         dispatch({type: ActionTypes.QUESTIONAIRE, payload: questionaires.data});
//       } catch (error) {
//         dispatch({type: ActionTypes.API_ERROR, payload: error});
//       }
//     } catch (error) {
//       dispatch({type: ActionTypes.API_ERROR, payload: error});
//     }
//   };
// };
// export const deleteQuestionaire = id => {
//   return async dispatch => {
//     try {
//       await QuestionaireService.deleteQuestionaire(id);
//       try {
//         const questionaires = await QuestionaireService.getQuestionaires();
//         dispatch({type: ActionTypes.QUESTIONAIRE, payload: questionaires.data});
//       } catch (error) {
//         dispatch({type: ActionTypes.API_ERROR, payload: error});
//       }
//     } catch (error) {
//       dispatch({type: ActionTypes.API_ERROR, payload: error});
//     }
//   };
// };
