// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'

// const DeleteUser = () => {

//   const [users, setUsers] = useState({})

//   const deleteUser = () => {
//     let delete_id = prompt('Enter user id which you want to delete : ')

//     axios.delete(`http://localhost:5000/users/${delete_id}`)
//       .then((response) => {
//         console.log(response.data)

//       //   axios.get(`http://localhost:5000/users`)
//       //     .then(response => setUsers(response))
//       //     .catch(error => console.log(error))


//       // })
//       // .catch(error => {
//       //   console.log(error)
//       // })


//   }

//   useEffect(() => {


//   return (
//     <div>
//       <button onClick={deleteUser}>Delete Record</button>
//     </div>
//   )
// }

// export default DeleteUser


import React from 'react'

const DeleteUser = () => {
  return (
    <div>

    </div>
  )
}

export default DeleteUser
