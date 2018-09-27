import * as actionTypes from './actions';

const titleReducer = (state = {title: []}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TITLE:
      return {...state, title: action.titleData.title}
    default:
      return state;
  }
}

export default titleReducer;
