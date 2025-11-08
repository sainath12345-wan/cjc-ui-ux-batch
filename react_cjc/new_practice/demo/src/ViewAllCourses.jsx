import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewAllCourses = () => {
  const [course, setCourse] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:3000/course')
      .then((response) => setCourse(response.data))
      .catch((error) => console.log("Error:", error));
  };

  useEffect(() => {
    fetchData(); // load automatically once
  }, []);

  return (
    <div>
      <button onClick={fetchData}>Reload Data</button>
      <table border={2}>
        <thead>
          <tr>
            <th>Course Id</th>
            <th>Course Name</th>
            <th>Course Type</th>
            <th>Course Duration</th>
            <th>Course Fees</th>
          </tr>
        </thead>
        <tbody>
          {course.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.courseName}</td>
              <td>{item.courseType}</td>
              <td>{item.courseDuration}</td>
              <td>{item.courseFees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllCourses;
