import React from 'react'

const HelpComponent = ({text, className, icon}) => {
  return (
    <div className='flex flex-row items-center gap-1 text-xs font-medium border-b-4 border-transparent'>
        <div className={className}/>
        <div>{text}</div>
        <div>{icon}</div>
    </div>
  )
}

export default HelpComponent;