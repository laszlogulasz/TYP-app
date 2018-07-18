const titleReducer = (state = {title: []}, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return {...state, title: action.titleData}
    default:
      return state;
  }
}

export default titleReducer;
