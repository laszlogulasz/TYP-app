import React from 'react';

const Avatar = (props) => {
  const {user, uid} = props;
  return (
    <div className="post__data__avatar">
      <img
        className="profileImage"
        src={`https://graph.facebook.com/${uid}/picture`}
        alt={`Avatar of ${user}`}
      />
    </div>
  )
}

export default Avatar;
