import './App.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import FormValidations from './FormValidations.jsx'



function App() {

  const [users, setUsers] = useState([])
  const [showData, setShowData] = useState(false)
  const [addUser, setAddUser] = useState(false)
  const [deleteUser, setDeleteUser] = useState(false)
  const [updateUser, setUpdateUser] = useState(false)
  const [showSearchStudent, setShowSearchStudent] = useState(false)
  const [searchStudent, setSearchStudent] = useState({})


  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();


  function savedata(formData) {
    console.log(formData)

    axios.post('http://localhost:3000/users', formData)
      .then((response) => {
        alert(`user : ${response.data.name} is added successfully.`)
      })
      .catch((error) => {
        console.log(error)
      })

    reset()

  }



  function getAllData() {
    if (!showData) {

      axios.get('http://localhost:3000/users')
        .then((response) => {
          console.log(response.data)
          setUsers(response.data)
          // setShowData(!showData)
          setShowData(true)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      // setShowData(!showData)
      setShowData(false)
    }

  }

  function addSingleUser() {

    if (!addUser) {
      setAddUser(true)
    } else {
      setAddUser(false)
    }


  }

  function getSingleUser() {

    if (!showSearchStudent) {
      let searchId = prompt('Enter ID : ')

      axios.get(`http://localhost:3000/users/${searchId}`)
        .then((response) => {
          console.log(response.data)
          setSearchStudent(response.data)
          // alert(`User With Id  : ${response.data.id} found.`)
          setShowSearchStudent(true)
        })
        .catch((error) => {
          alert(`User With Id  : ${searchId} is not found.`)
          console.log(error)
        })

    } else {
      setShowSearchStudent(false)
    }

  }


  // delete function when i click on delete button from data table then that particular record will be deleted

  function deleteSingleUser(deleteId) {


    axios.delete(`http://localhost:3000/users/${deleteId}`)
      .then((res) => {
        alert(`User with id : ${res.data.id} is deleted successfully`)
      })
      .catch((error) => console.log(error))

  }

  // it when i click on delete button from menu then data will be deleted from data table.

  function deleteSingleUser() {
    let deleteId = prompt('Enter ID : ')
    axios.delete(`http://localhost:3000/users/${deleteId}`)
      .then((res) => {
        alert(`User with id : ${res.data.id} is deleted successfully`)
      })
      .catch((error) => console.log(error))
  }

  // update user data
  function updateUserData() {
    if (!updateUser) {
      let userId = prompt('Enter ID : ')
      alert('Enter the updated Data  : ')
      let updatedName = prompt('Enter Name')
      let updatedUserName = prompt('Enter Username : ')
      let updatedPassword = prompt('Enter Password : ')

      const updatedUser = {
        name: updatedName,
        username: updatedUserName,
        password: updatedPassword
      }

      axios.put(`http://localhost:3000/users/${userId}`, updateUser)
        .then((response) => {
          prompt(`User With Id : ${userId} is updated successfully as per following details. \n Name : ${response.data.name} \n Username : ${response.data.username} \n Password : ${response.data.password} .`)
          setUpdateUser(true)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      setUpdateUser(false)
    }
  }

  function onSetValues() {
    console.log('onSetValue Called')
    setValue('name', 'xyz abc')
    setValue('username', 'abc123')
    setValue('password', 'abc123@')
  }





  return (
    <>


      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>



        <div className='container m-5 d-flex justify-content-around'>
          <button className='btn btn-secondary' onClick={getAllData}>VIEW ALL USERS</button>
          <button className='btn btn-secondary' onClick={getSingleUser}>VIEW SINGLE USER</button>
          <button className='btn btn-secondary'>SORT USER</button>
          <button className='btn btn-secondary' onClick={addSingleUser}>ADD NEW USER</button>
          <button className='btn btn-secondary' onClick={deleteSingleUser}>DELETE USER</button>
          <button className='btn btn-secondary'>UPDATE USER</button>
        </div>


        {/* REGISTRATION FORM */}
        {
          (addUser || updateUser) && (
            <div>
              <h2 className='text-center text-dark'>REGISTER HERE...</h2>
              <form className='bg-dark text-white rounded rounded-3 p-3 w-100' onSubmit={handleSubmit(savedata)}>

                <div className='form-group m-2'>
                  <p className='text-white'>{errors.name && errors.name.message}</p>
                  <label>NAME : </label>
                  <input type='text' name='name' placeholder='enter name' className='form-control' {...register('name', FormValidations.name)}></input>
                </div>

                <div className='form-group m-2'>
                  <p className='text-white'>{errors.username && errors.username.message}</p>
                  <label>USERNAME : </label>
                  <input type='text' name='username' placeholder='enter username' className='form-control' {...register('username', FormValidations.username)}></input>
                </div>

                <div className='form-group m-2'>
                  <p className='text-white'>{errors.password && errors.password.message}</p>
                  <label>PASSWORD : </label>
                  <input type='password' name='password' placeholder='enter password' className='form-control' {...register('password', FormValidations.password)}></input>
                </div>

                <div className='form-group m-4 d-flex flex-row justify-content-around gap-3'>
                  <input className='btn btn-primary' type='submit' value={'SAVE'}></input>
                  <input className='btn btn-danger' type='reset' value={'RESET'}></input>
                  <input className='btn btn-danger' type='button' onClick={onSetValues} value={'SET VALUE'}></input>
                </div>
              </form>
            </div>

          )
        }

        {/* DATA TABLE */}

        {showData && users && (
          <div className='container m-5'>
            <table className='table table-bordered table-hover table-striped m-auto justify-content-center align-middle'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>USERNAME</th>
                  <th>PASSWORD</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map(user => <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td><button className='btn btn-danger text-white' onClick={() => { deleteSingleUser(user.id) }}>delete</button></td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        )

        }

        {/* Searched Data Table */}
        {showSearchStudent && (
          <div className='container m-5'>
            <table className='table table-bordered table-hover table-striped m-auto justify-content-center align-middle'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>USERNAME</th>
                  <th>PASSWORD</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{searchStudent.id}</td>
                  <td>{searchStudent.name}</td>
                  <td>{searchStudent.username}</td>
                  <td>{searchStudent.password}</td>
                  <td><button className='btn btn-danger text-white' onClick={() => { deleteSingleUser(user.id) }}>delete</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        )

        }
      </div>
    </>
  )
}

export default App
