import React from "react";
import EntryList from "./EntryList";
// Temporary dummy data for testing
import { dummyEntries, dummyUser } from "../constants/constants";
import UserLeveling from "./UserLeveling";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <EntryList entries={dummyEntries} />
      <UserLeveling user={dummyUser} />
    </div>
  );
};

export default Dashboard;
