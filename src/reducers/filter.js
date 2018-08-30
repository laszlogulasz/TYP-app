const initialState = {
  filter: 'none'
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_FILTER':
      return {...state, filter: action.typFilter};
    case 'RESET_TYP':
      return initialState;
    default:
      return state;
  }
};

export default filterReducer;
