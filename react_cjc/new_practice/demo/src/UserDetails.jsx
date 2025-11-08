// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import DeleteUser from './DeleteUser'

// const UserDetails = () => {

//   const [users, setUsers] = useState([])



//   let getAllUsers = () => {
//     axios.get('http://localhost:5000/users')
//       .then((response) => {
//         setUsers(response.data)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }

//   useEffect(() => {
//     getAllUsers()
//   }, [])

//   const deleteUser = (id) => {
//     // let delete_id = prompt('Enter user id which you want to delete : ')

//     axios.delete(`http://localhost:5000/users/${id}`)
//       .then((response) => {
//         console.log(response.data)
//         getAllUsers();

//         //   axios.get(`http://localhost:5000/users`)
//         //     .then(response => setUsers(response))
//         //     .catch(error => console.log(error))


//         // })
//         // .catch(error => {
//         //   console.log(error)
//         // })


//       })

//   }

//   return (


//     <div>

//       <div className='d-flex'>
//         <button >Add User</button>
//       </div>

//       <table border={2} style={{ marginLeft: 'auto', marginRight: 'auto', width: '50%' }} className='table table-bordered table-striped table-hover text-center align-middle ' >
//         {/* table-bordered table-striped table-hover text-center align-middle */}
//         <thead className='table-dark'>
//           <tr>
//             <th>Id</th>
//             <th>Photo</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Age</th>
//             <th>Gender</th>
//             <th>Date Of Birth</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             users.map((user, index) => <tr>
//               <td>{user.id}</td>
//               <td><img src={user.image} style={{ width: '100px', height: '100px' }} alt="" /></td>
//               <td>{user.firstName}</td>
//               <td>{user.lastName}</td>
//               <td>{user.age}</td>
//               <td>{user.gender}</td>
//               <td>{user.birthDate}</td>
//               <td><button className='btn btn-danger' onClick={() => deleteUser(user.id)}>delete</button></td>
//             </tr>)
//           }
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default UserDetails


const UserDetails = ({ users, deleteUser }) => {

  return (
    <div>
      <table border={2} style={{ width: '50%', margin: 'auto' }} className="table table-striped table-hover align-middle ">
        <thead className='table-dark'>
          <tr>
            <th>Id</th>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Date Of Birth</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, i) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><img src={user.image} width="200" /></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.birthDate}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default UserDetails;

