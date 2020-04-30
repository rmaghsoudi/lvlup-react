import React from "react";

const EntryCard = (props) => {
  const entry = props.entry;

  return (
    <div className="entry-card">
      hello i am entry card
      <h3>{entry.name}</h3>
      <div className="card-content">
        <p>{entry.type}</p>
        <p>{entry.difficulty}</p>
        {entry.completed ? (
          <input type="checkbox" checked />
        ) : (
          <input type="checkbox" />
        )}
      </div>
    </div>
  );
};

export default EntryCard;
