import * as actionTypes from './actions';

const typReducer = (state = {typ: []}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TYP:
      return {...state, typ: action.typData.typ}
    default:
      return state;
  }
}

export default typReducer;
