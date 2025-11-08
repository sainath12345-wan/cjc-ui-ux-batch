import React, { useState, useEffect } from "react";
import axios from "axios";
import UserDetails from "./UserDetails";
import AddUserRecord from "./AddUserRecord";

const UserManager = () => {

  const [users, setUsers] = useState([]);

  //getAllUsers 

  function getAllUsers() {
    axios.get("http://localhost:5000/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }

  // Load users initially
  useEffect(() => {
    getAllUsers()
  }, []);

  // Add user in UI immediately
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  // Delete user and update UI
  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then(response => {
        console.log("Deleted User : " + response.data)
        getAllUsers();
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <AddUserRecord onUserAdded={addUser} />

      <UserDetails
        users={users}
        deleteUser={deleteUser}
      />
    </div>
  );
};

export default UserManager;
