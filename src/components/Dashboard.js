import React, { useEffect } from "react";
import EntryList from "./EntryList";
import { dummyUserId } from "../constants/constants";
import { ApiCalls } from "../hooks/APICalls";
import UserLeveling from "./UserLeveling";

const Dashboard = () => {
  const { apiUser, getUser } = ApiCalls();

  useEffect(() => {
    getUser(dummyUserId);
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {apiUser ? (
        <>
          <EntryList entries={apiUser.entries} />
          <UserLeveling user={apiUser} />
        </>
      ) : (
        <p>We loadin fam</p>
      )}
    </div>
  );
};

export default Dashboard;
