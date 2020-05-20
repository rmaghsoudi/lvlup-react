import React from "react";

const EntryModal = (props) => {
  const entry = props.entry;

  return (
    <div className="entry-modal">
      <div className="entry-modal-content">
        <h3 contentEditable="true">{entry.name}</h3>
        <div className="card-content">
          
          <label for="type-select">Type</label>
          <select name="types" id="type-select" value={entry.type}>
            <option value="task">Task</option>
            <option value="pillar">Pillar</option>
            <option value="goal">Goal</option>
          </select>

          <label for="difficulty">Difficulty</label>
          <input
            type="number"
            name="difficulty"
            min="1"
            max="10"
            value={entry.difficulty}
          />

          <label for="completed">Completed</label>
          <input type="checkbox" name="completed" checked={entry.completed} />

          <button onClick={() => props.toggleModal()}>Close Me</button>
        </div>
      </div>
    </div>
  );
};

export default EntryModal;
