import React from 'react'
import { Link } from 'react-router-dom'

const ComponentTrainRoute = ({name}) => {
  return (
    <div className='flex flex-row items-center min-w-[532px] justify-between pb-3 border-dashed border-b'>
        <p>{name}</p>
          <Link to={"/under-construction"} className='text-[#2196f3] border border-[#2196f3] text-sm font-medium py-[7px] px-3 rounded-full hover:bg-[#2196f3] hover:text-white'>Search Train</Link>
    </div>
  )
}

export default ComponentTrainRoute