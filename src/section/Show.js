import React from 'react'
import Upper from './division/Upper';
import Lower from './division/Lower';

const Show = () => {
  return (
    <div style = {mystyle}>
        <Upper/>
        <Lower/>

    </div>
  )
}

const mystyle = {
   position:"absolute",
   display:"flex",
   justifyContent:"center",
   height:"130vh"

}


export default Show