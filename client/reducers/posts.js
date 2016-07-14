export default function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log('incrementing likes');
      const i = action.index;
      // grab the objects in the array up to but not including the target post
      // grab the objects after the target post
      // insert a clone of the target post with all props cloned by spread, with likes property incremented by one
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
    default:
      return state;
  }
}
