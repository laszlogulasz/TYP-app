const typReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_TYP':
      return action.typ;
    default:
      return state;
  }
};

export default typReducer;
