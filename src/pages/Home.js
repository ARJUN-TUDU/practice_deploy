import React from 'react'
import list from '../list'
import Card from '../components/Card'
import Show from '../section/Show'


const Home = () => {

  return (
    <div style = {mystyle}>

         <Show/>

         {
            list.map((x)=> <div>
                {x.name}
            </div>)
         }
       


    </div>
  )
}

const mystyle = {
    
    width:"100%"

}

export default Home