import React from 'react'
import Trip from '../components/home/Trip'

const Home = () => {
  return (
    <div>
      <div className='border-2 border-[#007aff] bg-[#007aff] py-12 px-4'>
        <div className='flex flex-row justify-between'>
          <div>
            <Trip text={"One Way"} />
            <Trip text={"Round Trip"} />
            <Trip text={"Multicity"} />
          </div>
          <div>Search Lowest Price</div>
        </div>

        <div>

        </div>

        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Home