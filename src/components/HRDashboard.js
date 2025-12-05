import React from "react";

function HRDashboard({ onLogout }) {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold">HR Dashboard</a>

          <button className="btn btn-danger btn-sm" onClick={onLogout}>
            Logout
          </button>
        </div>
      </nav>

      <h3 className="mt-4 mb-3">Welcome, HR Admin</h3>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow text-center p-3">
            <h5>Total Employees</h5>
            <p className="display-6">24</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-3">
            <h5>Pending Leave Requests</h5>
            <p className="display-6">3</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-3">
            <h5>Attendance Regularizations</h5>
            <p className="display-6">5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HRDashboard;
