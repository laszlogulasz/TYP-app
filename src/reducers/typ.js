const typReducer = (state = {typ: []}, action) => {
  switch (action.type) {
    case 'UPDATE_TYP':
      return {...state, typ: action.typData}
    default:
      return state;
  }
}

export default typReducer;
