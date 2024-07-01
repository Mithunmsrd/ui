import React from 'react'
import Coursecards from '../components/Coursecards.jsx'
import Hero from '../components/Hero.jsx'
import Navbar from '../components/Navbar.jsx'
import Viewallcourses from '../components/Viewallcourses.jsx'



const Homepage = () => {
  return (
    <div>
         <Navbar/>
         <Hero/>
      <Coursecards ishome={true}/>
      <Viewallcourses/>
     
    </div>
  )
}

export default Homepage
