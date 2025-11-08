import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [students, setStudents] = useState([])
  const [heading, setHeading] = useState([])
  const [handleView, setHandleView] = useState(false)

  function getStudents() {
    if (handleView) {
      axios.get('http://localhost:3000/students')
        .then((response) => {
          console.log(response.data)
          setStudents(response.data)
          setHeading(Object.keys(response.data[0]))
          setHandleView(!handleView)

          // setHeading(Object.keys(students[0]))

        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      setHandleView(!handleView)
    }
  }






  return (


    <>

      <button onClick={getStudents}>show Students</button>


      {
        handleView && (

          <table border={2}>
            <thead>



              <tr>
                {
                  heading.map((key) => <th key={key}>{key}</th>)

                }
              </tr>
            </thead>
            <tbody>
              {
                students.map((student) => <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>

                </tr>
                )
              }
            </tbody>
          </table>
        )
      }


    </>
  )
}

export default App
