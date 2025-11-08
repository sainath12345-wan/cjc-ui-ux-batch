import React, { useEffect, useState } from 'react'


const Counter = () => {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  function incrementCounter(i) {
    console.log(counter)
    setCounter(counter + 1)
  }



  //once only update state . (once only re-render)
  // function incrementCounter(i) {
  //   console.log(i)
  //   setCounter(i)
  // }


  function incrementData() {
    console.log(data)
    setData(data + 1)
  }

  function callOnce() {
    console.log('callOnce function called.')
  }




  useEffect(() => {
    callOnce()

  }, [counter, data])





  return (
    <div>
      <button onClick={() => incrementCounter(1)}>Counter : {counter}</button>
      <button onClick={() => incrementData()}>Data : {data}</button>
    </div>
  )
}

export default Counter
