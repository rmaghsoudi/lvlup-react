import React, { useEffect } from "react";
import EntryList from "./EntryList";
import EntryModal from './EntryModal';
import { dummyUserId } from "../constants/constants";
import { ApiCalls } from "../hooks/APICalls";
import { ModalLogic } from '../hooks/ModalLogic';
import UserLeveling from "./UserLeveling";

const Dashboard = () => {
  const { apiUser, getUser } = ApiCalls();
  const { showModal, toggleModal, entry} = ModalLogic();

  useEffect(() => {
    getUser(dummyUserId);
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {showModal ? <EntryModal entry={entry} toggleModal={toggleModal} /> : null}
      {apiUser ? (
        <>
          <EntryList entries={apiUser.entries} toggleModal={toggleModal}/>
          <UserLeveling user={apiUser} />
        </>
      ) : (
        <p>We loadin fam</p>
      )}
    </div>
  );
};

export default Dashboard;
