import React from 'react'
import './whybook.css'

const WhyBook = ({icon, head, para}) => {
  return (
    <div className='why-book-div'>
        <div className='why-book-icon'>{icon}</div>
        <div className='why-book-head'>{head}</div>
        <div>{para}</div>
    </div>
  )
}

export default WhyBook