import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const Comments = ({ data, theme }) => {
  const { comments } = data;

  const sortComments = comments.sort(function(a, b) {
    const sortA = parseInt(a, 10);
    const sortB = parseInt(b, 10);
    return sortA - sortB;
  }); 
  console.log(sortComments);

  const commentList = sortComments.map((comment) => {
    return (      
      <Comment
        theme={theme}
        username={comment.poster}
        comment={comment.body} 
        key={comment.postedAt} />  
    );
  })
  return (
    <ul className="comments">
      {commentList}
    </ul>
  )
};

Comments.propTypes = {
  theme: PropTypes.string.isRequired,
  data: PropTypes.object
}

Comments.defaultProps = {
  theme: 'light',
  data: {
    comments: {
      poster: "posterone",
      body: "This is the insta-card"
    }
  }
}


export default Comments;