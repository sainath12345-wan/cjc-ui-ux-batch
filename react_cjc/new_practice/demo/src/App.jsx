import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './A'
import B from './B'
import ViewAllCourses from './ViewAllCourses'
import AddSingleCourse from './AddSingleCourse'
import ViewStudentsWithLoader from './ViewStudentsWithLoader'
import ShowProducts from './ShowProducts'
import Timer from './Timer'
import UserDetails from './UserDetails'
import AddUserRecord from './AddUserRecord'
import DeleteUser from './DeleteUser'
import Counter from './Counter'
import UserManager from './UserManager'
function App() {
  const [count, setCount] = useState(0)

  // const student = {
  //   rollNo: 101,
  //   name: "sainath wankhede",
  //   course: "Java Full Stack"
  // }

  const [student, setStudent] = useState({
    rollNo: null,
    name: null,
    course: null
  })

  return (
    <>
      {/* <B setstu={setStudent} />
      <A stu={student} /> */}

      {/* <ViewAllCourses />
      <AddSingleCourse /> */}
      {/* <ViewStudentsWithLoader /> */}
      {/* <ShowProducts /> */}
      {/* <Timer /> */}
      {/* <AddUserRecord /> */}
      {/* <UserDetails /> */}
      <DeleteUser />

      {/* <Counter /> */}

      <UserManager />
    </>
  )
}

export default App
