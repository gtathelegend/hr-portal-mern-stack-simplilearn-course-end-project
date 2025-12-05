import React from "react";

function LeaveApproval({ leaves, onApprove, onReject }) {
  return (
    <div className="card p-3 shadow mt-4">
      <h4>Leave Requests (HR Review)</h4>

      {leaves.length === 0 ? (
        <p>No leave requests available.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>Employee</th>
              <th>From</th>
              <th>To</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.employeeName}</td>
                <td>{leave.fromDate}</td>
                <td>{leave.toDate}</td>
                <td>{leave.reason}</td>
                <td>{leave.status}</td>

                <td>
                  {leave.status === "Pending" && (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => onApprove(leave.id)}
                      >
                        Approve
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => onReject(leave.id)}
                      >
                        Reject
                      </button>
                    </>
                  )}

                  {leave.status !== "Pending" && (
                    <span className="text-muted">Processed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LeaveApproval;
