import React from "react";

function EmployeeDashboard({ onLogout }) {
  return (
    <div className="container mt-5">
      <h2>Employee Dashboard</h2>
      <p>Welcome! You have Employee access.</p>

      <button className="btn btn-danger" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default EmployeeDashboard;
