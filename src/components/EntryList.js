import React from "react";
import EntryCard from "./EntryCard";

const EntryList = (props) => {

  return (
    <div className="entry-list">
      hello i am entry list
      {props.entries ? (
        props.entries.map((entry) => {
          return <EntryCard entry={entry} toggleModal={props.toggleModal}/>;
        })
      ) : (
        <p>No entries found.</p>
      )}
    </div>
  );
};

export default EntryList;
