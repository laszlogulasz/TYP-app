const loggingReducer = (state = false, action) => {
  switch (action.type) {
    case 'SWITCH_LOGGING':
      return action.logged;
    default:
      return state;
  }
};

export default loggingReducer;
