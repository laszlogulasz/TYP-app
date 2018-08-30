const initialState = {
  title: '',
  typ: ''
}
const typReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return {...state, title: action.title};
    case 'UPDATE_TYP':
      return {...state, typ: action.typ};
    case 'RESET_TYP':
      return initialState;
    default:
      return state;
  }
};

export default typReducer;
