import React from "react";

const EntryCard = (props) => {
  const entry = props.entry;

  return (
    <div className="entry-card">
      <h3>{entry.name}</h3>
      <div className="card-content">
        <p>{entry.type}</p>
        <p>Difficulty {entry.difficulty}</p>
        <input type="checkbox" checked={entry.completed} />
        <button onClick={() => props.toggleModal(entry)}>Toggle Modal</button>
      </div>
    </div>
  );
};

export default EntryCard;
