import UserInfo from '../UserInfo/UserInfo';
import stringDate from '../../utilities/stringDate';
import styles from './CommentSection.module.scss';

const CommentSection = ({ comments, displayComments }) => {
  const allComments = comments.map((comment, index) => {
    return (
      <div key={index}>
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
    <div
      className={styles.comment}
      style={{ display: displayComments ? 'block' : 'none' }}
    >
      {allComments}
    </div>
  );
};

export default CommentSection;
