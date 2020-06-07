import React from "react";
import EntryCard from "./EntryCard";
import { ModalLogic } from "../hooks/ModalLogic";
import EntryModal from "./EntryModal";

const EntryList = (props) => {
  const { showModal, toggleModal, entry } = ModalLogic();

  const handleCreateEntry = (e) => {
    toggleModal();
  };

  return (
    <div className="entry-list">
      hello i am entry list
      <button onClick={handleCreateEntry}>Create Entry</button>
      {showModal ? (
        <EntryModal entry={entry} toggleModal={toggleModal} />
      ) : null}
      {props.entries ? (
        <>
          {props.entries.map((entry) => {
            return (
              <EntryCard
                entry={entry}
                toggleModal={toggleModal}
                key={entry.id}
              />
            );
          })}
        </>
      ) : (
        <p>No entries found.</p>
      )}
    </div>
  );
};

export default EntryList;
