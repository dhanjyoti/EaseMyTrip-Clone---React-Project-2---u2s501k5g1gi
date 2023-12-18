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
import Star from '../images/Star'
import HalfStar from '../images/HalfStar'
import Profile from '../images/Profile'
import GooglePlay from '../images/hotels/google-play.png'
import AppStore from '../images/hotels/app-store.png'
import QRCode from '../images/hotels/app-qr-code.svg'
import PopularDestination from '../components/popularDestination/PopularDestination'
import Bangalore from '../images/hotels/bangalore.png'
import Delhi from '../images/hotels/Delhi.png'
import Goa from '../images/hotels/Goa.png'
import Bangkok from '../images/hotels/Bangkok.png'
import Kolkata from '../images/hotels/Kolkata.png'
import Mumbai from '../images/hotels/Mumbai.png'
import Singapore from '../images/hotels/Singapore.png'
import Dubai from '../images/hotels/Dubai.png'

const Hotels = () => {
    return (
        <div>
            <div><img className='m-auto my-7 rounded-lg ' src={CodeImage} /></div>
            <div className='top-hotel-chain'>
                <h1 className='text-center'>Our Top Hotel Chains</h1>
                <p>EaseMyTrip has a wide range of luxury and budget-friendly hotel chain properties. We have picked the finest hotels in India with world-class amenities. We bring you not only a stay option, but an experience in your budget to enjoy the luxury. We make sure that all the hotels are safe, hygienic, comfortable, and easily approachable when it comes to location. Book your hotel with EaseMyTrip and don't forget to grab an amazing hotel deal to save huge on your stay.</p>
                <ul className='top-hotel-icons'>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain1} /></li>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain2} /></li>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain3} /></li>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain4} /></li>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain5} /></li>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain6} /></li>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain7} /></li>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain8} /></li>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain9} /></li>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain10} /></li>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain11} /></li>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain12} /></li>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain13} /></li>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain14} /></li>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain15} /></li>
                    <li className='hotel-icons'><img className='thi' src={TopHotelChain16} /></li>
                </ul>
            </div>
            <div className='mt-9 p-8'>
                <div className='flex flex-row items-center justify-between w-[1200px] m-auto'>
                    {/* first */}
                    <div className='relative w-[23%]'>
                        <span className='blue-circle'></span>
                        <img className='z-10 relative w-[276px] h-[334px]' src={HotelApp} />
                    </div>
                    {/* second */}
                    <div className='h-[200px] border-r border-solid border-gray-300 w-[21%] ml-10'>
                        <div>
                            <span className='font-bold text-base'>Highest-rated mobile app</span>
                        </div>
                        <div>
                            <div className='mt-8 grid grid-cols-5 text-gray-700'>
                                <div className='text-left'>
                                    <div className='text-[42px] font-bold text-neutral-900'>4.6</div>
                                    {/* </div> */}
                                    <div className='flex'>
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <HalfStar />
                                    </div>
                                    <div className='my-2 flex items-center'>
                                        <Profile />
                                        &nbsp;
                                        <span>4,83,456</span>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center'>
                                        <span>5</span>
                                        <div className='w-[80%] h-[14px] bg-[#3ec12f] ml-2'></div>
                                    </div>
                                    <div className='flex items-center'>
                                        <span>4</span>
                                        <div className='w-[60%] h-[14px] bg-[#80dd87] ml-2'></div>
                                    </div>
                                    <div className='flex items-center'>
                                        <span>3</span>
                                        <div className='w-[40%] h-[14px] bg-[#e1d013] ml-2'></div>
                                    </div>
                                    <div className='flex items-center'>
                                        <span>2</span>
                                        <div className='w-[22%] h-[14px] bg-[#d57522] ml-2'></div>
                                    </div>
                                    <div className='flex items-center'>
                                        <span>1</span>
                                        <div className='w-[15%] h-[14px] bg-[#ff7373] ml-2'></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='text-center w-[16%]'>
                        <div className='relative'>
                            <div className='oliveleaf'></div>
                            <p className='text-base font-bold mt-[-73px]'>Trusted by</p>
                            <p className='font-bold text-[22px] mt-[47px]'>
                                20
                                Million+
                                Customers
                            </p>
                            <div className='oliveleaf2'></div>
                        </div>
                    </div>
                    <div className='w-[23%]'>
                        <div>
                            <div className='text-base font-bold'>Download EaseMyTrip App</div>
                            <div className='useCode'>Save Up to Rs.5000 OFF on your first hotel booking Use Code: EMTGREET</div>
                            <p className='pt-[10px] pb-[5px] text-[16px]'>For Hassle-Free Hotel Booking</p>
                        </div>
                        <div className='flex flex-col items-start'>
                            <div className='flex flex-row items-center justify-between gap-2'>
                                <div className='flex flex-col gap-[6px]'>
                                    <img className='w-[155px] h-[47px]' src={GooglePlay} />
                                    <img className='w-[155px] h-[47px]' src={AppStore} />
                                </div>
                                <div className='items-center text-[7px]'>
                                    <img className='w-[100px] h-[100px]' src={QRCode} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='w-[1200px] my-[26px] mx-auto py-auto px-[15px]'>
                <div>
                    <div className='popular-destination'>
                        <div className='text-[26px] font-semibold text-black mr-10'>Book Hotels at Popular Destinations</div>
                    </div>
                </div>
                <div className='flex flex-row '>
                    <PopularDestination image={Bangalore} place={"Bangalore"} price={"495"}/>
                    <PopularDestination image={Delhi} place={"Delhi"} price={"269"}/>
                    <PopularDestination image={Goa} place={"Goa"} price={"615"}/>
                    <PopularDestination image={Bangkok} place={"Bangkok"} price={"802"}/>
                    <PopularDestination image={Kolkata} place={"Kolkata"} price={"503"}/>
                    <PopularDestination image={Mumbai} place={"Mumbai"} price={"441"}/>
                    <PopularDestination image={Singapore} place={"Singapore"} price={"2313"}/>
                    <PopularDestination image={Dubai} place={"Dubai"} price={"2753"}/>
                </div>
            </div>
        </div>
    )
}

export default Hotels