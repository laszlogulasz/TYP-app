const filterReducer = (state = 'style1', action) => {
  switch (action.type) {
    case 'SWITCH_FILTER':
      console.log(action.typFilter);
      return action.typFilter;
    default:
      return state;
  }
};

export default filterReducer;
