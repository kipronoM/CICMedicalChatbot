import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="summary-tiles">
        <div className="tile">Total Users: 100</div>
        <div className="tile">Total Chats: 200</div>
        <div className="tile">Active Users: 75</div>
        <div className="tile">New Messages: 50</div>
      </div>
      <div className="charts">
        <div className="chart">User Growth Chart</div>
        <div className="chart">Messages Per Day Chart</div>
      </div>
      <div className="users-chats-list">
        <h2>Users List</h2>
        <div className="list">User 1, User 2, User 3...</div>
        <h2>Chats List</h2>
        <div className="list">Chat 1, Chat 2, Chat 3...</div>
      </div>
    </div>
  );
};

export default Dashboard;
