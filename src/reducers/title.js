const titleReducer = (state = {title: []}, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return {...state, title: action.titleValue}
    default:
      return state;
  }
}

export default titleReducer;
