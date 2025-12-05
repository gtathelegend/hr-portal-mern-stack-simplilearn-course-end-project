import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HRDashboard from "./components/HRDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";

import employeeData from "./data/employees.json"; // ← JSON Import

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [page, setPage] = useState("login");

  // EMPLOYEE DATA FROM JSON
  const [employees, setEmployees] = useState(employeeData);

  // ADD EMPLOYEE
  const handleAddEmployee = (newEmp) => {
    const updated = [...employees, newEmp];
    setEmployees(updated);
  };

  // SIGNUP
  const handleSignup = (newUser) => {
    setUsers([...users, newUser]);
    alert("Registration Successful!");
    setPage("login");
  };

  // LOGIN
  const handleLogin = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) return alert("Invalid credentials");

    setCurrentUser(user);

    if (user.role === "HR") setPage("hr");
    else setPage("employee");
  };

  // LOGOUT
  const handleLogout = () => {
    setCurrentUser(null);
    setPage("login");
  };

  return (
    <>
      {page === "login" && (
        <Login onLogin={handleLogin} goToSignup={() => setPage("signup")} />
      )}

      {page === "signup" && (
        <Signup onSignup={handleSignup} goToLogin={() => setPage("login")} />
      )}

      {page === "hr" && currentUser?.role === "HR" && (
        <HRDashboard
          employees={employees}
          onAddEmployee={handleAddEmployee}
          onLogout={handleLogout}
        />
      )}

      {page === "employee" && currentUser?.role === "EMPLOYEE" && (
        <EmployeeDashboard onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
