import React from "react";
import AddEmployee from "./AddEmployee";
import EmployeeList from "./EmployeeList";
import LeaveApproval from "./LeaveApproval";

function HRDashboard({ employees, leaves, onAddEmployee, onApproveLeave, onRejectLeave, onLogout }) {
  return (
    <div className="container-fluid p-0">

      {/* TOP NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2 shadow">
        <span className="navbar-brand fw-bold">HR Portal – HR Dashboard</span>

        <div className="ms-auto">
          <button className="btn btn-outline-light btn-sm" onClick={onLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="container mt-4">

        {/* DASHBOARD CARDS */}
        <div className="row g-4 mb-4">
          <div className="col-md-4 col-sm-6">
            <div className="card shadow p-3 text-center">
              <h5>Total Employees</h5>
              <h2 className="text-primary">{employees.length}</h2>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card shadow p-3 text-center">
              <h5>Pending Leave Requests</h5>
              <h2 className="text-warning">
                {leaves.filter((l) => l.status === "Pending").length}
              </h2>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="card shadow p-3 text-center">
              <h5>Total Leave Requests</h5>
              <h2 className="text-success">{leaves.length}</h2>
            </div>
          </div>
        </div>

        {/* EMPLOYEE MANAGEMENT SECTION */}
        <h3 className="fw-bold mt-4">Employee Management</h3>
        <div className="row mt-3 g-4">
          <div className="col-lg-4 col-md-12">
            <AddEmployee onAddEmployee={onAddEmployee} />
          </div>

          <div className="col-lg-8 col-md-12">
            <EmployeeList employees={employees} />
          </div>
        </div>

        {/* LEAVE MANAGEMENT SECTION */}
        <h3 className="fw-bold mt-5">Leave Management</h3>
        <LeaveApproval
          leaves={leaves}
          onApprove={onApproveLeave}
          onReject={onRejectLeave}
        />
      </div>
    </div>
  );
}

export default HRDashboard;
