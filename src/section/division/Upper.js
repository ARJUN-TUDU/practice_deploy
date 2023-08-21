import React from 'react'
import './styles.css'
import {motion} from 'framer-motion'

const Upper = () => {
  return (
   
    
    
    
          <div style = {mystyle}>
             <motion.div
             
             initial={{
                y:-100
             }}

             animate={{
                y:100,
                duration:1
            }}
            
             
            
            
            >

                
    
    

<div className="font_header_style" style = {headers} >
      <h1>This is the way</h1>
      <a href = "https://www.facebook.com">go</a>
</div> </motion.div>


<br/>
</div>
   
  )
}

const mystyle = {

    width:"100vw",
    height:"80vh",
    
    display:"flex",
    justifyContent:"center",
    marginTop:"5%",
    


}

const headers = {

    width : "800px",
    height:"300px",
    backgroundColor:"purple",
    marginLeft:"50",
    borderRadius:"10px",
    backgroundColor:"#aaaac4",
    
}

export default Upper