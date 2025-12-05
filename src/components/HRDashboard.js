import React from "react";

function HRDashboard({ onLogout }) {
  return (
    <div className="container mt-5">
      <h2>HR Dashboard</h2>
      <p>Welcome! You have HR access.</p>

      <button className="btn btn-danger" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default HRDashboard;
