import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewStudentsWithLoader() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false); // spinner state

  // Function to get all students
  const getAllStudents = () => {
    setLoading(true); // start loader
    axios
      .get("http://localhost:5000/students")
      .then((res) => {
        setStudents(res.data);
        setLoading(false); // stop loader after success
      })
      .catch((error) => {
        alert("Error fetching data: " + error.message);
        setLoading(false); // stop loader even if error
      });
  };

  // Call API on component load
  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Students List</h1>

      {/* Loader Section */}
      {loading ? (
        <div>
          <div className="spinner"></div>
          <p>Loading data, please wait...</p>
        </div>
      ) : (
        <table border={1} width="60%" align="center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Batch No.</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.id}</td>
                <td>{stu.fullName}</td>
                <td>{stu.emailId}</td>
                <td>{stu.age}</td>
                <td>{stu.batchNo}</td>
                <td>{stu.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Refresh button */}
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={getAllStudents}
      >
        Refresh Data
      </button>

      {/* Inline CSS for Spinner */}
      <style>{`
        .spinner {
          margin: 20px auto;
          border: 6px solid #f3f3f3;
          border-top: 6px solid #3498db;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default ViewStudentsWithLoader;
