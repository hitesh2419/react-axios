import {useState,useEffect } from 'react'
import axios from 'axios'

function Home() {
  const [posts,setPosts]=useState([])
  const [event,setEvent]=useState("")
 
  useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then((response)=>{
        //   console.log(response.data)
          setPosts(response.data)
        })
  },[])
  
  const posthandle=(event)=>{setEvent(event.target.value)}

   const quest=()=>{
      axios.post("https://jsonplaceholder.typicode.com/users",{name:event}).then((response)=>console.log(response.data))
  }
  return (
    <div>
      <h1>Hello World</h1>
      <input type="text" onChange={posthandle}/>
      <button onClick={quest}>ADD NAME</button>
      {
        posts.map((ele)=><div key={ele.id}>{ele.name}</div>)
      }   
    </div>
  )
}

export default Home

