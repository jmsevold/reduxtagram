import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
  // we have all posts. we have the ID from the params
  // each post has a code with the same value as the ID in the params
  const posts        = props.posts;
  const postId       = props.params.postId;
  const i            = posts.findIndex((post) =>  post.code === postId);
  const post         = posts[i];
  const postComments = props.comments[postId] || []


  return(
    <div className='single-photo'>
      <Photo i={i} post={post} {...props}/>
      <Comments postComments={postComments} {...props}/>
    </div>
  );
}

export default Single;
