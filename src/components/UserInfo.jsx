import React from 'react';

const UserInfo = ({ fullName, avatar }) => {
  return (
    <div>
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
