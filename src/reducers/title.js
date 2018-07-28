const titleReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return action.title;
    default:
      return state;
  }
};

export default titleReducer;
