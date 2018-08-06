const filterReducer = (state = 'none', action) => {
  switch (action.type) {
    case 'SWITCH_FILTER':
      console.log(action.typFilter);
      return action.typFilter;
    default:
      return state;
  }
};

export default filterReducer;
