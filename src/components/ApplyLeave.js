import React, { useState } from "react";

function ApplyLeave({ employeeName, onApplyLeave }) {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLeave = {
      id: Date.now(),
      employeeName,
      fromDate,
      toDate,
      reason,
      status: "Pending"
    };

    onApplyLeave(newLeave);

    setFromDate("");
    setToDate("");
    setReason("");
  };

  return (
    <div className="card p-3 shadow mt-3">
      <h4>Apply for Leave</h4>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">From</label>
          <input
            type="date"
            className="form-control"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-2">
          <label className="form-label">To</label>
          <input
            type="date"
            className="form-control"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Reason</label>
          <textarea
            className="form-control"
            rows="2"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          ></textarea>
        </div>

        <button className="btn btn-primary w-100 mt-2">
          Submit Leave Request
        </button>
      </form>
    </div>
  );
}

export default ApplyLeave;
