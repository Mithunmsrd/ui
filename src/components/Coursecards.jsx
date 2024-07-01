import React, { useEffect, useState } from 'react'
import Coursecard from './Coursecard'
import courses from '../courses.json'
import Layout from '../Mainlayout/Layout';



const Coursecards = ({ishome=false}) => {

  const[course, setCourse]= useState([]);
  const[loading, setLoading]=useState(true);
useEffect(()=>{
  const fetchCourse = async()=>{
    try{ 
      const res = await fetch("http://localhost:5000/courses");
      const data = await res.json();
      setCourse(data)
    }catch(error){
      console.log('error',error);
    }finally{
      setLoading(false)
    }
  }
  fetchCourse()
},[])
console.log(course);
  const courselist = ishome? courses.slice(0,3):courses;
  //console.log(courses);
  return (
    <div>
        {/* <!-- cards --> */}
        <Layout/>
        <div className='bg-purple-100 flex flex-col items-center justify-center my-10 p-10 text-center'>
    <h1 className='font-bold text-2xl md:text-4xl text-purple-800'>{ishome?"BROWSE OUR TOP COURSES":"BROWSE OUR ALL COURSES"}</h1>
    
    <h2 className='font-medium text-lg md:text-xl text-purple-400 mt-4'>Choose the course that's right for your career goals.</h2>
  </div>{loading?<h1>loading....</h1>: <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
  {courselist.map((course)=>
    <Coursecard key={course.id} course = {course} />
  )}



</div>}
   
    </div>
  )
}

export default Coursecards
