import React from "react";
import ApplyLeave from "./ApplyLeave";
import MyLeaves from "./MyLeaves";

function EmployeeDashboard({ currentUser, leaves, onApplyLeave, onLogout }) {
  const employeeName = currentUser?.name || "Employee";

  return (
    <div className="container-fluid p-0">

      {/* TOP NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 py-2 shadow">
        <span className="navbar-brand fw-bold">
          HR Portal – Employee Dashboard
        </span>

        <div className="ms-auto">
          <span className="text-white me-3">
            Welcome, {employeeName}
          </span>

          <button className="btn btn-light btn-sm" onClick={onLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="container mt-4">

        {/* QUICK INFO CARDS */}
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <div className="card shadow p-3">
              <h5>Your Department</h5>
              <h3 className="text-primary">{currentUser.department}</h3>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow p-3">
              <h5>Total Leaves Applied</h5>
              <h3 className="text-success">
                {leaves.filter((l) => l.employeeName === employeeName).length}
              </h3>
            </div>
          </div>
        </div>

        {/* LEAVE APPLICATION & STATUS */}
        <div className="row g-4">
          <div className="col-lg-4 col-md-12">
            <ApplyLeave employeeName={employeeName} onApplyLeave={onApplyLeave} />
          </div>

          <div className="col-lg-8 col-md-12">
            <MyLeaves employeeName={employeeName} leaves={leaves} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default EmployeeDashboard;
