import React from "react";

const UserLeveling = (props) => {
  const user = props.user;

  return (
    <div className="user-leveling">
      <div className="xp-meter">
        <p>You have {user.xp}XP points.</p>
      </div>
      <div className="level-info">
        <p>You're currently level {user.level}.</p>
      </div>
    </div>
  );
};

export default UserLeveling;
