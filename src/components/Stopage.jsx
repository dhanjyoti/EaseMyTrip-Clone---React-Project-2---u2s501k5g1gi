import React from 'react'

const Stopage = ({stopsNumber, stops}) => {
    return (
        <div className='flex flex-col items-center w-16 h-11 bg-[rgb(33,150,243)] text-xs text-white p-2 rounded-md'>
            <span>{stopsNumber}</span>
            <span>{stops}</span>
        </div>
    )
}

export default Stopage