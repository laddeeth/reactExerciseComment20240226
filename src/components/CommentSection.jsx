import React from 'react';
import UserInfo from './UserInfo';
import stringDate from '../utilities/stringDate';

const CommentSection = ({ comments, displayComments }) => {
  const allComments = comments.map((comment, index) => {
    return (
      <div
        className='comment'
        key={index}
      >
        <p>
          {comment.content}
          <br />
          <span>{stringDate(comment.date)}</span>
        </p>
        <UserInfo
          fullName={comment.author.fullname}
          avatar={comment.author.image}
        />
      </div>
    );
  });
  return (
    <div style={{ display: displayComments ? 'block' : 'none' }}>
      {allComments}
    </div>
  );
};

export default CommentSection;
