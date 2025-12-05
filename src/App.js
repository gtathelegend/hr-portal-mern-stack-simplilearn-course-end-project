import React, { useState } from "react";

import Login from "./components/Login";
import Signup from "./components/Signup";
import HRDashboard from "./components/HRDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";

import employeeData from "./data/employees.json";

function App() {
  // ---------------------------
  // AUTH STATE
  // ---------------------------
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [page, setPage] = useState("login");

  // ---------------------------
  // EMPLOYEE LIST (JSON + new signups)
  // ---------------------------
  const [employees, setEmployees] = useState(employeeData);

  // ---------------------------
  // LEAVE DATA
  // ---------------------------
  const [leaves, setLeaves] = useState([]); // MUST BE []

  // ---------------------------
  // SIGNUP
  // ---------------------------
  const handleSignup = (newUser) => {
    // Add new user to users list
    setUsers([...users, newUser]);

    // ALSO add them to employee directory
    const newEmployee = {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email,
      department: newUser.department
    };

    setEmployees([...employees, newEmployee]);

    alert("Registration Successful!");
    setPage("login");
  };

  // ---------------------------
  // LOGIN
  // ---------------------------
  const handleLogin = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      alert("Invalid username or password");
      return;
    }

    setCurrentUser(user);

    // ROLE-BASED NAVIGATION
    if (user.role === "HR") {
      setPage("hr");
    } else {
      setPage("employee");
    }
  };

  // ---------------------------
  // LOGOUT
  // ---------------------------
  const handleLogout = () => {
    setCurrentUser(null);
    setPage("login");
  };

  // ---------------------------
  // ADD EMPLOYEE (HR)
  // ---------------------------
  const handleAddEmployee = (newEmp) => {
    setEmployees([...employees, newEmp]);
  };

  // ---------------------------
  // APPLY LEAVE (EMPLOYEE)
  // ---------------------------
  const handleApplyLeave = (newLeave) => {
    setLeaves([...leaves, newLeave]);
  };

  // ---------------------------
  // APPROVE/REJECT LEAVE (HR)
  // ---------------------------
  const handleApproveLeave = (id) => {
    setLeaves(
      leaves.map((l) =>
        l.id === id ? { ...l, status: "Approved" } : l
      )
    );
  };

  const handleRejectLeave = (id) => {
    setLeaves(
      leaves.map((l) =>
        l.id === id ? { ...l, status: "Rejected" } : l
      )
    );
  };

  // ---------------------------
  // PAGE RENDERING
  // ---------------------------
  return (
    <>
      {/* LOGIN PAGE */}
      {page === "login" && (
        <Login
          onLogin={handleLogin}
          goToSignup={() => setPage("signup")}
        />
      )}

      {/* SIGNUP PAGE */}
      {page === "signup" && (
        <Signup
          onSignup={handleSignup}
          goToLogin={() => setPage("login")}
        />
      )}

      {/* HR DASHBOARD */}
      {page === "hr" && currentUser?.role === "HR" && (
        <HRDashboard
          employees={employees}
          leaves={leaves}
          onAddEmployee={handleAddEmployee}
          onApproveLeave={handleApproveLeave}
          onRejectLeave={handleRejectLeave}
          onLogout={handleLogout}
        />
      )}

      {/* EMPLOYEE DASHBOARD */}
      {page === "employee" && currentUser?.role === "EMPLOYEE" && (
        <EmployeeDashboard
          currentUser={currentUser}
          leaves={leaves}
          onApplyLeave={handleApplyLeave}
          onLogout={handleLogout}
        />
      )}
    </>
  );
}

export default App;
