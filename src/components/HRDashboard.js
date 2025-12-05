import React from "react";
import AddEmployee from "./AddEmployee";
import EmployeeList from "./EmployeeList";

function HRDashboard({ employees, onAddEmployee, onLogout }) {
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

      <div className="row mt-4 g-4">
        <div className="col-md-4">
          <AddEmployee onAddEmployee={onAddEmployee} />
        </div>

        <div className="col-md-8">
          <EmployeeList employees={employees} />
        </div>
      </div>
    </div>
  );
}

export default HRDashboard;
