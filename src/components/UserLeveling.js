import React from "react";

const UserLeveling = (props) => {
  const user = props.user;

  return (
    <div className="user-leveling">
      <div className="xp-meter">
        <label for="xp-bar">
          {user.xp}/{user.xp_to_lvlup}XP to lvlup!
        </label>
        <progress id="xp-bar" value={user.xp} max={user.xp_to_lvlup}></progress>
      </div>
      <div className="level-info">
        <p>Level {user.level}.</p>
      </div>
    </div>
  );
};

export default UserLeveling;
