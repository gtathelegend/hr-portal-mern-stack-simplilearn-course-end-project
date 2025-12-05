import React from "react";

function EmployeeDashboard({ onLogout }) {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold">Employee Dashboard</a>

          <button className="btn btn-light btn-sm" onClick={onLogout}>
            Logout
          </button>
        </div>
      </nav>

      <h3 className="mt-4">Welcome, Employee</h3>

      <div className="card shadow mt-3 p-3">
        <h5>Your Profile</h5>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@company.com</p>
        <p><strong>Department:</strong> IT</p>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
