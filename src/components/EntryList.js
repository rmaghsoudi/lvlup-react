import React from "react";
import EntryCard from "./EntryCard";
import { ModalLogic } from "../hooks/ModalLogic";
import EntryModal from "./EntryModal";

const EntryList = (props) => {
  const { showModal, toggleModal, entry } = ModalLogic();

  return (
    <div className="entry-list">
      hello i am entry list
      {props.entries ? (
        <>
          {props.entries.map((entry) => {
            return <EntryCard entry={entry} toggleModal={toggleModal} key={entry.id}/>;
          })}
          {showModal ? (
            <EntryModal entry={entry} toggleModal={toggleModal} />
          ) : null}
        </>
      ) : (
        <p>No entries found.</p>
      )}
    </div>
  );
};

export default EntryList;
