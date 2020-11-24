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

  return (
    <ul className="comments">
      <Comment
        theme={theme}
        username={comments.poster}
        comment={comments.body} />
    </ul>
  );
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