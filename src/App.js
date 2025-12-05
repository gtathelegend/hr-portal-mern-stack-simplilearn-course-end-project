import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [page, setPage] = useState("login");
  const [users, setUsers] = useState([]);

  const handleSignup = (newUser) => {
    setUsers([...users, newUser]);
    alert("Registration Successful!");
    setPage("login");
  };

  const handleLogin = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      alert("Login Successful!");
      // Navigation will change later in Step 3
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      {page === "login" && (
        <Login onLogin={handleLogin} goToSignup={() => setPage("signup")} />
      )}
      {page === "signup" && (
        <Signup onSignup={handleSignup} goToLogin={() => setPage("login")} />
      )}
    </>
  );
}

export default App;
