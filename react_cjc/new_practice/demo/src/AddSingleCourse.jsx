import axios from "axios";
import React from "react";
import { useState } from "react";

const AddSingleCourse = () => {

  // state for form data
  const [formData, setFormData] = useState({
    courseName: "",
    courseType: "",
    courseDuration: "",
    courseFees: ""
  })

  // Handle input change

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  // Add Course when button is clicked

  const handleAddCourse = () => {


    //basci validation

    if (
      !formData.courseName ||
      !formData.courseType ||
      !formData.courseDuration ||
      !formData.courseFees
    ) {
      alert("Please fill in all fileds!")
      return;
    }


    //post request using axios

    axios
      .post("http://localhost:3000/course", formData)
      .then((reponse) => {
        alert("course added successfullly");
        console.log("Added Course  : ", reponse.data)

        //Reset firn after successfullly addition

        setFormData({
          courseName: "",
          courseType: "",
          courseDuration: "",
          courseFees: ""
        });
      })
      .catch((error) => {
        console.log("Error adding course : ", error);
        alert("Failed to add course !");
      })
  }


  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Add New Course</h2>

      <hr />

      <div style={{ marginBottom: "10px" }}>
        <input type="text" name="courseName" placeholder="Course Name"
          value={formData.courseName}
          onChange={handleChange}
        /> {" "}

        <input
          type="text"
          name="courseType"
          placeholder="Course Type"
          value={formData.courseType}
          onChange={handleChange}
        />{" "}

        <input
          type="text"
          name="courseDuration"
          placeholder="Course Duration"
          value={formData.courseDuration}
          onChange={handleChange}
        />{" "}

        <input
          type="text"
          name="courseFees"
          placeholder="Course Fees"
          value={formData.courseFees}
          onChange={handleChange}
        />

      </div>

      <button onClick={handleAddCourse}>Add course</button>
    </div>
  )
}

export default AddSingleCourse
