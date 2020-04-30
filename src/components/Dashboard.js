import React from 'react';
import EntryList from './EntryList';
// Temporary const dummyData for testing
import { dummyData } from '../constants/constants';

const Dashboard = () => {

  return(
    <div className="dashboard">
      <h1>Dashboard</h1>
      <EntryList entries={ dummyData } />
    </div>
  )
}

export default Dashboard;