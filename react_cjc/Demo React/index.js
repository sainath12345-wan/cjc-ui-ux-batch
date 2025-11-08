const students = [
  {
    sid : 101,
    name : 'sainath wankhede',
    course : 'java full stack'

  },
  {
    sid : 102,
    name : 'nandu khole',
    course : 'python full stack'
  }
]


students.map((student)=>{
  let key = Object.keys(student)
  console.log(key)
})

