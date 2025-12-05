import React from "react";

function MyLeaves({ leaves = [], employeeName }) {
  // leaves = [] ensures it is NEVER undefined
  const myLeaves = leaves.filter(
    (leave) => leave.employeeName === employeeName
  );

  return (
    <div className="card p-3 shadow mt-3">
      <h4>My Leave Requests</h4>

      {myLeaves.length === 0 ? (
        <p>No leave requests submitted yet.</p>
      ) : (
        <table className="table mt-3 table-bordered">
          <thead className="table-dark">
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myLeaves.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.fromDate}</td>
                <td>{leave.toDate}</td>
                <td>{leave.reason}</td>
                <td>
                  <span
                    className={
                      leave.status === "Approved"
                        ? "text-success fw-bold"
                        : leave.status === "Rejected"
                        ? "text-danger fw-bold"
                        : "text-warning fw-bold"
                    }
                  >
                    {leave.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MyLeaves;
