import { useState } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import stringDate from '../../utilities/stringDate';
import UserInfo from '../UserInfo/UserInfo';
import styles from './Post.module.scss';

export const Post = ({ post, comments, displayComments }) => {
  const [showComments, setShowComments] = useState(false);
  return (
    <div className={styles.post}>
      <h1>{post.headline}</h1>
      <h3>{stringDate(post.date)}</h3>
      <p>{post.content}</p>
      <UserInfo
        fullName={post.author.fullname}
        avatar={post.author.image}
      />
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      <CommentSection
        comments={comments}
        displayComments={showComments}
      />
    </div>
  );
};
