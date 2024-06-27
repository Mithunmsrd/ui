import React from 'react'
import Coursecard from './Coursecard'

const Coursecards = ({}) => {
  return (
    <div>
        {/* <!-- cards --> */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
<Coursecard/>
<Coursecard/>
<Coursecard/>
<Coursecard/>
<Coursecard/>



</div>
    </div>
  )
}

export default Coursecards
