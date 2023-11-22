import React from 'react'

const FamousLocation = ({image, place}) => {
  return (
    <div className='w-[168px] h-[136px] flex flex-col items-center justify-center'>
        <div>{image}</div>
        <div>{place}</div>
    </div>
  )
}

export default FamousLocation;