import React from "react";

const EntryModal = (props) => {
  const entry = props.entry; 

  return (
    <div className="entry-modal">
      <div className="entry-modal-content">
        <h3 contentEditable="true">{entry.name}</h3>
        <div className="card-content">
          <p>{entry.type}</p>
          <p>Difficulty</p><input type="number" min="1" max="10" value={entry.difficulty} />
          <input type="checkbox" checked={entry.completed} />
          <button onClick={props.toggleModal}>Close Me</button>
        </div>
      </div>
    </div>
  );
};

export default EntryModal;
