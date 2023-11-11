import React from 'react'

const HelpComponent = ({text, className, icon}) => {
  return (
    <div className='help-component'>
        <div className={className}/>
        <div>{text}</div>
        <div>{icon}</div>
    </div>
  )
}

export default HelpComponent;