import React from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

const Details = () => {

    const {id} = useParams();
    
  return (
    <div style = {mydstyle}>
        <Link to = "/"></Link>
        

        {id}
    </div>
  )
}

const mydstyle = {
    
    height:"400px",
    width:"500px",
    backgroundColor:"red"

}

export default Details

