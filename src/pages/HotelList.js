import React from 'react'
import '../styles/hotellist.css'
import HotelSearchBar from '../components/searchBar/HotelSearchBar'

const HotelList = () => {
    return (
        <div className='bg-blue-100'>
            <div className='main-form border-2 border-green-500'>
                <HotelSearchBar/>
                {/* <button className='modify-button'>Modify Search</button> */}
            </div>
            <div>
                <div className='h-96'></div>
                <div className='search-hotel'>
                    <div className='search-hotel-div'>
                        <ul className='flex flex-wrap items-center m-0 p-0 list-none'>
                            <li className='hotel-li-search'>
                                Home
                            </li>
                            <li className='hotel-li-search'>Bangalore, India Hotels (1607)</li>
                        </ul>
                    </div>
                    <div className='block relative float-right w-[252px] outline-none'>
                        <input type='text' placeholder='Enter hotel name or location' className='search-button'/>
                    </div>
                    <div></div>
                </div>
            </div>

        </div>
    )
}

export default HotelList