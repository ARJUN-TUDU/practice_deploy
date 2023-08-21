import React from 'react'
import list from '../../list'
import Card from '../../components/Card'
import {Routes,Route} from 'react-router-dom'
import Details from "../Details"

const Lower = () => {
  return (
    <>
    
     <div>
     <Routes>

<Route exctpath = "/" element =
                 
                 {<div style = {mystyle} >
                  {
                  list.map((x)=>{
                      return <Card id = {x.id} name = {x.name}/>
                  })
                  }
                  
                  </div>}
                  />


<Route path = "/details/:id" element = {<Details/>}/>


</Routes>

     </div>
    
    
    </>
  )
}

const mystyle = {
   
   position:"absolute",
   marginTop:"20%",
   width : "700px",
   height:"400px",
   backgroundColor:"white",
   display:"grid",
   gridTemplateColumns:"auto auto auto",
   borderRadius:"10px",
   
}

export default Lower