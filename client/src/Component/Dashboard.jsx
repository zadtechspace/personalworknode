import axios from "axios"
import { useEffect, useState } from "react"
import Users from "./Users"


const Dashboard = () => {
    const [list, setList] = useState([])
    let URL = "http://localhost:2000/dashboard"
    useEffect(() => {
        axios.get(URL).then((res)=>{
            setList(res.data)
            console.log(res.data)
        })
    }, [])

    
    
    // const click =(e)=>{
    //     e.preventDefault()
    //     axios.get(URL).then((res)=>{
    //         setList(res.data)
    //         console.log(res.data)
    //     })
    // }
   
  return (
    <div>
        
        <section>
            <Users list={list}/>
        </section>
        {/* <button onClick={click}>click me</button> */}
    </div>
  )
}

export default Dashboard