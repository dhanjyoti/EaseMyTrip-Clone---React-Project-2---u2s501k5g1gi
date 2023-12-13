import React from 'react'

const ActivitiesBottomCard = ({icon, activityName}) => {
  return (
    <div className='flex flex-col items-center w-[192px] h-[131px] border-2 border-gray-300 rounded-full px-6 py-5 text-sm'>
        <div><img src={icon} /></div>
        <div>{activityName}</div>
    </div>
  )
}

export default ActivitiesBottomCard