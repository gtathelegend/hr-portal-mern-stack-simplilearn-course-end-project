import React from "react";
import ApplyLeave from "./ApplyLeave";
import MyLeaves from "./MyLeaves";

function EmployeeDashboard({ currentUser, leaves, onApplyLeave, onLogout }) {
  const employeeName = currentUser?.name;

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-dark bg-primary rounded p-2">
        <span className="navbar-brand">Employee Dashboard</span>
        <button className="btn btn-light btn-sm" onClick={onLogout}>
          Logout
        </button>
      </nav>

      <ApplyLeave employeeName={employeeName} onApplyLeave={onApplyLeave} />

      <MyLeaves employeeName={employeeName} leaves={leaves} />
    </div>
  );
}

export default EmployeeDashboard;
