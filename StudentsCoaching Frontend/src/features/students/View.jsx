import React from 'react'

function View() {
     const [selectedStudent, setSelectedStudent] = React.useState(); 
  return (
    <div>
        <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
          <h3 className="text-center text-primary mb-3">Student Details</h3>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{selectedStudent.name}</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>{selectedStudent.age}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{selectedStudent.gender}</td>
              </tr>
              <tr>
                <th>Course</th>
                <td>{selectedStudent.course}</td>
              </tr>
              <tr>
                <th>Total Fee</th>
                <td>{selectedStudent.totalFee}</td>
              </tr>
              <tr>
                <th>Amount Paid</th>
                <td>{selectedStudent.amountPaid}</td>
              </tr>
              <tr>
                <th>Due</th>
                <td>{selectedStudent.due}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-3">
            <button
              className="btn btn-secondary me-2"
              onClick={() => setSelectedStudent()}
            >
              Close
            </button>
            <Link
              className="btn btn-primary"
              to={`/updateStudent/${selectedStudent["_id"]}`}
            >
              Update
            </Link>
          </div>
        </div>
    </div>
  )
}

export default View