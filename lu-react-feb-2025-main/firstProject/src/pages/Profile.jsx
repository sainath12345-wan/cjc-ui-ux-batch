import { useEffect, useState } from "react"

export default function Profile()
{

    let [name,setName] = useState("Saurabh")
    let [city,setCity] = useState("Mumbai")

    //useeffect is by default called for every render and re render
    //if a blank array is passed useeffect is called only once for first time render
    //if you pass varibale in dep array useeffect is called for first render and for variable change
    useEffect(()=>{
        console.log("Profile component mounted")

        return ()=>{
           console.log("component destroyed")
        }

    },[name])

    // function changeName()
    // {
    //     setName("Thor")
    // }

    return (
        <>
            <div className="profile">
                <h1>{name} {city}</h1>
                <button onClick={()=>{setName("Thor")}}>Change Name</button>
                <button onClick={()=>{setCity("Asgard")}}>Change City</button>
            </div>
        </>
    )
}