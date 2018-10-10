const initialState = {
  posts: false,
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_POSTS':
      return { ...state, posts: action.posts };
    case 'RESET_POSTS':
      return initialState;
    default:
      return state;
  }
};

export default postsReducer;
