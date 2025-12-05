import React, { useState } from "react";

function AddEmployee({ onAddEmployee }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: Date.now(),
      name,
      email,
      department
    };

    onAddEmployee(newEmployee);

    // Clear form
    setName("");
    setEmail("");
    setDepartment("");
  };

  return (
    <div className="card p-3 shadow">
      <h4>Add New Employee</h4>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Full Name</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Department</label>
          <input
            className="form-control"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary w-100 mt-2">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
