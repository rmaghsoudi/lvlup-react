import React from "react";
import {ApiCalls} from '../hooks/APICalls';

const EntryModal = (props) => {
  const {patchEntry, postEntry} = ApiCalls();
  const entry = props.entry;

  const handleSubmitPatch = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    patchEntry(formData, entry.id)
  };

  const handleSubmitPost = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    postEntry(formData)
  };

  return (
    <div className="entry-modal">
      <div className="entry-modal-content">
        {console.log(entry)}
        {console.log(entry === {})}

        <form onSubmit={!Object.keys(entry).length ? handleSubmitPost : handleSubmitPatch}>
          <input type="text" name="name" id="modal-title" defaultValue={entry.name} />

          <label htmlFor="type-select">Type</label>
          <select name="type" id="type-select" defaultValue={entry.type}>
            <option value="task">Task</option>
            <option value="pillar">Pillar</option>
            <option value="goal">Goal</option>
          </select>

          <label htmlFor="difficulty">Difficulty</label>
          <input
            type="number"
            name="difficulty"
            min="1"
            max="10"
            defaultValue={entry.difficulty}
          />

          <label htmlFor="completed">Completed</label>
          <input
            type="checkbox"
            name="completed"
            value="True"
            defaultChecked={entry.completed}
          />

          <input type="hidden" name="user" value={entry.user} />

          <button type="submit">Save</button>
        </form>
        <button onClick={() => props.toggleModal()}>Close Me</button>
      </div>
    </div>
  );
};

export default EntryModal;
