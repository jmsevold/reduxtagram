import React from 'react';
import Photo from './Photo'

const PhotoGrid = (props) => {
  return(
    <div className='photo-grid'>
      {props.posts.map((post,i) => {
        return (
          <Photo {...props} key={i} i={i} post={post} />
        );
      })}
    </div>
  );
}

export default PhotoGrid;
