import React from 'react'
import { useForm } from 'react-hook-form';
import passwordValidation from './PasswordValidation.jsx'
import axios from 'axios';

function RegisterForm() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const uservalidations = {
    username: {
      required: { value: true, message: "username is must required" },
      minLength: { value: 3, message: "Enter minimum 3 characters" },
      maxLength: { value: 7, message: "Enter maximum 7 characters" },
      pattern: { value: /^[a-zA-Z]+$/, message: "Enter only characters" }

    }
  }

  function savedata(data) {

    axios.post('http://localhost:3000/student', data)
      .then((response) => {
        alert(`student with id : ${response.data.name} is added successfully.`)
      })
      .catch((error) => {
        console.log(error)
      })

    console.log(data)
    reset()
  }








  return <>
    <h1>REGISTER FORM</h1>
    <div>


      <form onSubmit={handleSubmit(savedata)}>

        <div>
          <p>{errors.name && errors.name.message}</p>
          <label>NAME</label>
          <input type="text" name="name" {...register('name',
            {
              required: { value: true, message: "name is must required" },
              minLength: { value: 3, message: "Enter minimum 3 characters" },
              maxLength: { value: 7, message: "Enter maximum 7 characters" },
              pattern: { value: /^[a-zA-Z]+$/, message: "Enter only characters" }

            })} />
        </div>

        <div>
          <p>{errors.username && errors.username.message}</p>
          <label>USERNAME</label>
          <input type="text" name="username" {...register('username', uservalidations.username)}></input>
        </div>

        <div>
          <p>{errors.password && errors.password.message}</p>
          <label>PASSWORD</label>
          <input type="password" name="password" {...register('password', passwordValidation.password)}></input>
        </div>

        <div>
          <input type="submit" value={'SAVE'}></input>
        </div>

      </form>
    </div>
  </>
}

export default RegisterForm
