// let student = [
//   {
//     id :1 ,
//     name : "tushar"
//   },
//   {
//     id : 8,
//     name : "sham"
//   },
//   {
//     id : 2,
//     name : "ram"
//   }
// ]

// console.log(student)

// student.sort((a,b)=> a.id - b.id)

// console.log(student)

function getData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();  // run after fetching
  }, 2000);
}

function showMessage() {
  console.log("Now showing data to user!");
}

getData(showMessage);
