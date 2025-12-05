import React from "react";
import AddEmployee from "./AddEmployee";
import EmployeeList from "./EmployeeList";
import LeaveApproval from "./LeaveApproval";

function HRDashboard({ employees, leaves, onAddEmployee, onApproveLeave, onRejectLeave, onLogout }) {
  return (
    <div className="container mt-4">

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded p-2">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">HR Dashboard</span>

          <button className="btn btn-danger btn-sm" onClick={onLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* EMPLOYEE MANAGEMENT */}
      <h3 className="mt-4">Employee Management</h3>

      <div className="row mt-3 g-4">
        {/* Add Employee Form */}
        <div className="col-md-4">
          <AddEmployee onAddEmployee={onAddEmployee} />
        </div>

        {/* Employee List */}
        <div className="col-md-8">
          <EmployeeList employees={employees} />
        </div>
      </div>

      {/* LEAVE MANAGEMENT */}
      <h3 className="mt-5">Leave Requests Management</h3>

      <LeaveApproval
        leaves={leaves}
        onApprove={onApproveLeave}
        onReject={onRejectLeave}
      />
    </div>
  );
}

export default HRDashboard;
