import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const Comments = ({ data, theme }) => {
  const { commentOne, commentTwo } = data;
  return (
    <ul className="comments">
      <Comment
        theme={theme}
        username={commentOne.poster}
        comment={commentOne.body} />
      <Comment
        theme={theme}
        username={commentTwo.poster}
        comment={commentTwo.body} />
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
    commentOne: {
      poster: "posterone",
      body: "This is the insta-card"
    },
    commentTwo: {
      poster: "postertwo",
      body: "So cool!"
    }
  }
}


export default Comments;