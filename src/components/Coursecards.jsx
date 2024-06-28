import React from 'react'
import Coursecard from './Coursecard'
import courses from '../courses.json'

const Coursecards = ({}) => {
  //console.log(courses);
  return (
    <div>
        {/* <!-- cards --> */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
  {courses.map((course)=>
    <Coursecard key={course.id} course = {course} />
  )}



</div>
    </div>
  )
}

export default Coursecards
