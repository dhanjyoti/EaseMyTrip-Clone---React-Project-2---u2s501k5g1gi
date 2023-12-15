import React from 'react'
import '../styles/hotels.css'
import CodeImage from '../images/hotels/app-download-strip3.png'
import TopHotelChain1 from '../images/hotels/ramee-hotels-hp-new.png'
import TopHotelChain2 from '../images/hotels/EMTLORDS-26oct21-hp.png'
import TopHotelChain3 from '../images/hotels/EMTOT-26oct21-hp.png'
import TopHotelChain4 from '../images/hotels/welcomheritage-hp.png'
import TopHotelChain5 from '../images/hotels/bloom-hp.png'
import TopHotelChain6 from '../images/hotels/byke-hp.png'
import TopHotelChain7 from '../images/hotels/justa-hp.png'
import TopHotelChain8 from '../images/hotels/royal-orchid-hp.png'
import TopHotelChain9 from '../images/hotels/shrigo-hp2.png'
import TopHotelChain10 from '../images/hotels/cygnett-hp.png'
import TopHotelChain11 from '../images/hotels/brij-hp.png'
import TopHotelChain12 from '../images/hotels/clarks-hp.png'
import TopHotelChain13 from '../images/hotels/EMTTGI20-26oct21-hp.png'
import TopHotelChain14 from '../images/hotels/the-clarks-hotel-hp.png'
import TopHotelChain15 from '../images/hotels/spree-hotels-hp.png'
import TopHotelChain16 from '../images/hotels/ananta_hotel_hp.png'
import HotelApp from '../images/hotels/hotel-app.webp'

const Hotels = () => {
  return (
    <div>
        <div><img className='m-auto my-7 rounded-lg ' src={CodeImage} /></div>
        <div className='top-hotel-chain'>
            <h1 className='text-center'>Our Top Hotel Chains</h1>
            <p>EaseMyTrip has a wide range of luxury and budget-friendly hotel chain properties. We have picked the finest hotels in India with world-class amenities. We bring you not only a stay option, but an experience in your budget to enjoy the luxury. We make sure that all the hotels are safe, hygienic, comfortable, and easily approachable when it comes to location. Book your hotel with EaseMyTrip and don't forget to grab an amazing hotel deal to save huge on your stay.</p>
            <ul className='top-hotel-icons'>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain1}/></li>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain2}/></li>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain3}/></li>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain4}/></li>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain5}/></li>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain6}/></li>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain7}/></li>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain8}/></li>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain9}/></li>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain10}/></li>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain11}/></li>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain12}/></li>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain13}/></li>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain14}/></li>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain15}/></li>
                <li className='hotel-icons'><img className='thi' src={TopHotelChain16}/></li>
            </ul>
        </div>
        <div className='mt-9 p-8'>
            <div className='flex flex-row items-center justify-between w-[1200px] m-auto'>
                <div className='relative w-23%'>
                    <span className='blue-circle'></span>
                    <img className='z-10 relative w-[276px] h-[334px]' src={HotelApp} />
                </div>
                <div className='h-[200px] border-r border-solid border-gray-300 w-21% ml-10'>
                    <div>
                        <span className='font-bold text-base'>Highest-rated mobile app</span>
                    </div>
                    <div>
                        <div className='mt-8 grid grid-cols-5 text-gray-700'>
                            <div className='text-left'>
                                <div className='text-[42px] font-bold text-neutral-900'>4.6</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Hotels