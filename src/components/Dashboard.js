import React, { useEffect } from "react";
import EntryList from "./EntryList";
// Temporary dummy data for testing
import { dummyEntries } from "../constants/constants";
import { ApiCalls } from "../hooks/APICalls";
import UserLeveling from "./UserLeveling";

const Dashboard = () => {
  const { apiUser, getUser } = ApiCalls();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {apiUser ? (
        <>
          {console.log(apiUser)}
          <EntryList entries={dummyEntries} />
          <UserLeveling user={apiUser} />
        </>
      ) : (
        <p>We loadin fam</p>
      )}
    </div>
  );
};

export default Dashboard;
