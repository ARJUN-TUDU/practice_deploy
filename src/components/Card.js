import React from 'react'
import {Image,Col,Row} from 'react-bootstrap';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';




const Card = ({id,name}) => {
  return (
    <div style = {{backgroundColor:"white",padding:"",margin:"10px",borderRadius:"5px",position:"relative"}}>
          <Link to = {`/details/${id}`} >
       <motion.div
       
       initial={{
         scale:1
       }}
       whileHover={{
        scale:1.5
       }}
       exit={{
        scale:0.8
       }}
       style = {{
        position:"absolute"
       }}
       >
       <img style = {{
            width:"100%",
            height:"100%",
            objectFit:"cover",
            borderRadius:"5px",
            opacity:"0.9",
            
        }}
      src='https://mdbootstrap.com/img/new/standard/city/041.webp'
      className='img-thumbnail'
      alt='...'
    />
       </motion.div>
     
       <div style = {inner}>
           <h5>{name}</h5>
       </div>
       </Link>


  
    </div>
  )
}

const inner = {
    position : "absolute",
    left :"30%",
    color:"white",
    fontSize :"30px"

}

export default Card