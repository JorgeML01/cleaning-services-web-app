import React from "react";
import "./styles.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <section className="dashboard-section">
        <h2>Statistics</h2>
        <div className="statistics-container">
          <p>Total Users: 100</p>
          <p>Active Users: 80</p>
          <p>Inactive Users: 20</p>
        </div>
      </section>
      <section className="dashboard-section">
        <h2>Recent Activities</h2>
        <ul className="activities-list">
          <li>User logged in</li>
          <li>New order placed</li>
          <li>Product added to the inventory</li>
        </ul>
      </section>
      <section className="dashboard-section">
        <h2>Quick Links</h2>
        <ul className="quick-links">
          <li>
            <a href="/users">Manage Users</a>
          </li>
          <li>
            <a href="/orders">View Orders</a>
          </li>
          <li>
            <a href="/products">Manage Products</a>
          </li>
        </ul>
      </section>
      <section className="dashboard-section">
        <h2>Quick Links</h2>
        <ul className="quick-links">
          <li>
            <a href="/users">Manage Users</a>
          </li>
          <li>
            <a href="/orders">View Orders</a>
          </li>
          <li>
            <a href="/products">Manage Products</a>
          </li>
        </ul>
      </section>
      <section className="dashboard-section">
        <h2>Quick Links</h2>
        <ul className="quick-links">
          <li>
            <a href="/users">Manage Users</a>
          </li>
          <li>
            <a href="/orders">View Orders</a>
          </li>
          <li>
            <a href="/products">Manage Products</a>
          </li>
        </ul>
      </section>
      <section className="dashboard-section">
        <h2>Quick Links</h2>
        <ul className="quick-links">
          <li>
            <a href="/users">Manage Users</a>
          </li>
          <li>
            <a href="/orders">View Orders</a>
          </li>
          <li>
            <a href="/products">Manage Products</a>
          </li>
        </ul>
      </section>
      <section className="dashboard-section">
        <h2>Quick Links</h2>
        <ul className="quick-links">
          <li>
            <a href="/users">Manage Users</a>
          </li>
          <li>
            <a href="/orders">View Orders</a>
          </li>
          <li>
            <a href="/products">Manage Products</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
