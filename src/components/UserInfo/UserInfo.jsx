import styles from './UserInfo.module.scss';

const UserInfo = ({ fullName, avatar }) => {
  return (
    <div className={styles.userInfo}>
      <h2>{fullName}</h2>
      <img
        src={avatar}
        alt='profile image'
        height='50'
      />
    </div>
  );
};

export default UserInfo;
