import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HRDashboard from "./components/HRDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [page, setPage] = useState("login");

  // REGISTER NEW USER
  const handleSignup = (newUser) => {
    setUsers([...users, newUser]);
    alert("Registration Successful!");
    setPage("login");
  };

  // LOGIN EXISTING USER
  const handleLogin = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      alert("Invalid username or password");
      return;
    }

    setCurrentUser(user);

    // Role-based navigation
    if (user.role === "HR") {
      setPage("hr");
    } else if (user.role === "EMPLOYEE") {
      setPage("employee");
    }
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
        <HRDashboard onLogout={handleLogout} />
      )}

      {page === "employee" && currentUser?.role === "EMPLOYEE" && (
        <EmployeeDashboard onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
