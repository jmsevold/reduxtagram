function postExists(action){
  return typeof action.postId !== 'undefined' ? true : false
}

function postComments(state=[], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {user: action.author, text: action.comment} ];

    case 'REMOVE_COMMENT':
      const i = action.i;
       return [
         ...state.slice(0,i),
         ...state.slice(i + 1, i + 1)
       ];

    default:
      return state;
  }
  return state;
}

export default function comments(state = [], action) {
  if (postExists(action)){
    const postId          = action.postId;
    const commentsList    = state[postId];
    const updatedComments = postComments(commentsList, action)
    return {
      ...state,
      [postId]: updatedComments
    };
  }
  return state;
}



//check if the post item is there, ie, the key i
