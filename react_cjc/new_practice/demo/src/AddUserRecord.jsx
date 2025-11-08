// import React from 'react'
// import axios from 'axios'
// import { useState } from 'react'

// const AddUserRecord = () => {


//   const [formData, setFormData] = useState({
//     id: "",
//     image: "",
//     firstName: "",
//     lastName: "",
//     age: "",
//     gender: "",
//     birthDate: ""
//   })

//   // handle input change
//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value })
//   }

//   // Add Cours Wehn button is clicked

//   const handleAddUser = () => {

//     if (
//       !formData.id ||
//       !formData.image ||
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.age ||
//       !formData.gender ||
//       !formData.birthDate
//     ) {
//       alert("Please fill in all fileds ! ")
//       return;
//     }

//     axios
//       .post('http://localhost:5000/users', formData)
//       .then(reponse => {
//         alert('User add successfullly');
//         console.log("Added User : ", reponse.data)

//         setFormData({
//           id: "",
//           image: "",
//           firstName: "",
//           lastName: "",
//           age: "",
//           gender: "",
//           birthDate: ""
//         })


//       })
//       .catch(error => {
//         console.log('Error adding User : ', error)
//         alert('Failed to add user !')
//       })


//   }



//   return (
//     <div>
//       <h2>Add New User</h2>
//       <hr />

//       <div style={{ marginBottom: '10px' }}>

//         <input type="text"
//           name="id"
//           placeholder='ID'
//           value={formData.id}
//           onChange={handleChange}
//         />{" "}

//         <input type="text"
//           name="image"
//           placeholder='Image URL'
//           value={formData.image}
//           onChange={handleChange}
//         />{" "}

//         <input type="text"
//           name="firstName"
//           placeholder='First Name'
//           value={formData.firstName}
//           onChange={handleChange}
//         />{" "}

//         <input type="text"
//           name="lastName"
//           placeholder='Last Name'
//           value={formData.lastName}
//           onChange={handleChange}
//         />{" "}

//         <input type="text"
//           name="age"
//           placeholder='Age'
//           value={formData.age}
//           onChange={handleChange}
//         />{" "}

//         <input type="text"
//           name="gender"
//           placeholder='Gender'
//           value={formData.gender}
//           onChange={handleChange}
//         />{" "}

//         <input type="date"
//           name="birthDate"
//           placeholder='Date Of Birth'
//           value={formData.birthDate}
//           onChange={handleChange}
//         />
//       </div>

//       <button onClick={handleAddUser}>Add User</button>
//     </div>
//   )
// }

// export default AddUserRecord


//************************************************************************************** */



import axios from 'axios'
import { useState } from 'react'

const AddUserRecord = ({ onUserAdded

}) => {


  const [formData, setFormData] = useState({
    id: "",
    image: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    birthDate: ""
  })

  // handle input change
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  // Add Cours Wehn button is clicked

  const handleAddUser = () => {

    if (
      !formData.id ||
      !formData.image ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.age ||
      !formData.gender ||
      !formData.birthDate
    ) {
      alert("Please fill in all fileds ! ")
      return;
    }

    axios.post('http://localhost:5000/users', formData)
      .then(response => {
        alert("User added successfully");

        onUserAdded(response.data); // ✅ send new user to parent -> UI UPDATES

        setFormData({
          id: "",
          image: "",
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          birthDate: ""
        });
      })
      .catch(error => {
        console.log("Error adding user", error);
      });


  }



  return (
    <div>
      <h2>Add New User</h2>
      <hr />

      <div style={{ marginBottom: '10px' }}>

        <input type="text"
          name="id"
          placeholder='ID'
          value={formData.id}
          onChange={handleChange}
        />{" "}

        <input type="text"
          name="image"
          placeholder='Image URL'
          value={formData.image}
          onChange={handleChange}
        />{" "}

        <input type="text"
          name="firstName"
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleChange}
        />{" "}

        <input type="text"
          name="lastName"
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handleChange}
        />{" "}

        <input type="text"
          name="age"
          placeholder='Age'
          value={formData.age}
          onChange={handleChange}
        />{" "}

        <input type="text"
          name="gender"
          placeholder='Gender'
          value={formData.gender}
          onChange={handleChange}
        />{" "}

        <input type="date"
          name="birthDate"
          placeholder='Date Of Birth'
          value={formData.birthDate}
          onChange={handleChange}
        />
      </div>

      <button onClick={handleAddUser}>Add User</button>
    </div>
  )
}

export default AddUserRecord
