import React from "react";

const UserLeveling = (props) => {
  const user = props.user;

  return (
    <div className="user-leveling">
      <div className="xp-meter">
        <p>
          {user.xp}/{user.xp_to_lvlup}XP to lvlup!
        </p>
      </div>
      <div className="level-info">
        <p>Level {user.level}.</p>
      </div>
    </div>
  );
};

export default UserLeveling;
