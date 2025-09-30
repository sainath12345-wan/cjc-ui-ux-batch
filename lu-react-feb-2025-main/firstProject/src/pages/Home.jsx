import { useState } from "react"

export default function Home()
{
    let [name,setName] = useState("Saurabh")

    function printSomething()
    {
        setName("Thor")
    }

    function print()
    {
        console.log("you are in area 51")
    }


    return (
        <>
            <div className="home">
                
                Home Page {name}

                <button onClick={printSomething}>Click</button>



            </div>

            
        </>
    )
}