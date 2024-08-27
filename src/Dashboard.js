import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import './Dashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard = ({ onLogout }) => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Number of Messages',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: ['Users Active', 'Users Inactive'],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ['#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'New Users',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const users = [
    { id: 1, name: 'John Doe', status: 'Active' },
    { id: 2, name: 'Jane Smith', status: 'Active' },
    { id: 3, name: 'Sam Wilson', status: 'Inactive' },
    { id: 4, name: 'Lisa Brown', status: 'Active' },    
    { id: 4, name: 'Lisa Brown', status: 'Active' },
  ];

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#chats">Chats</a></li>
          <li><a href="#reports">Reports</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><button onClick={onLogout}>Logout</button></li>
        </ul>
      </nav>
      <div className="content">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="charts-container">
          <div className="chart">
            <h3>Messages Over Time</h3>
            <Bar data={barData} />
          </div>
          <div className="chart">
            <h3>User Activity</h3>
            <Doughnut data={doughnutData} />
          </div>
          <div className="chart">
            <h3>New Users</h3>
            <Line data={lineData} />
          </div>
        </div>
        <div className="queue-icon">
          <span role="img" aria-label="chat queue">💬 Chats in Queue</span>
        </div>
        <div className="table-container">
          <h3>Active Users</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
