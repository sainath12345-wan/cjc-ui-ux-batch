function Hello() {


  // here we can write JS Inside the React Component.

  // JS Variables
  let myName = "sainath";
  let count = 20;

  // JS Functions
  let fullName = () => {
    return "sainath wankhede";
  }



  return <>
    {/* here we can write html inside React Component */}
    <h1>This is future speaking.</h1>

    {/* 
    
    if you want to use javascript code inside JSX We have to use following syntax.
    
    syntax : { javascript code. }

    */}
    <h2>I am your Teacher {myName}</h2>
    <h2>I am your Teacher {fullName()}</h2>

    <h3>Count : {count}</h3>

    {/* pause : 1:48:00 */}
  </>
}

export default Hello;