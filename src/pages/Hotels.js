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
import WhyBookHotel from '../components/whyBookHotel/WhyBookHotel'
import HotelIcon from "../images/hotels/Hotelicon.svg"
import WalletIcon from "../images/hotels/WalletIcon.svg"
import RatingIcon from "../images/hotels/RatingIcon.svg"
import BeachIcon from "../images/hotels/BeachIcon.svg"
import Accordion from '../components/accordian/Accordian'

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

            <div className='deal-para'>
                <div className='m-auto'>
                    <div className='py-8 px-0 text-[#fff] rounded-lg w-[65%]'>
                        <h4 className='text-2xl mb-5 font-medium'>Cheapest Deals on Budget & Luxury Hotels are Available at EaseMyTrip</h4>
                        <p className='text-sm text-left mt-[15px]'>Due to the huge influx of tourists in India, EaseMyTrip offers a wide range of luxury, deluxe and budget hotels to them. Choose to stay in luxury and comfort with the greatest discounts available on hotel bookings.</p>
                        <p className='text-sm text-left mt-[15px]'>We list the classiest budget hotels on our site along with some of the prominent international hotel chains of India including Oberoi Group, ITC Group, Taj Group, Le Meridian Group and many others. Ranging from class hotels to luxury beach resorts, each hotel on our site gives you a memorable staying experience. Along with deluxe, budget and luxury hotels, EaseMyTrip also displays a number of heritage hotels that offer you a royal stay. Enjoy cheap hotel deals for any destination with great savings.</p>
                    </div>
                </div>
            </div>

            <div className='w-[1200px] my-[26px] mx-0 py-0 px-[15px]'>
                <div className='pb-[2px] w-[100%] overflow-x-auto flex items-center justify-center'>
                    <div className='text-[28px] font-semibold mr-1'>Why Book Hotels with EaseMyTrip.com?</div>
                </div>
                <div className='mt-[26px] mx-auto mb-5 flex flex-row justify-between flex-wrap'>
                    <WhyBookHotel icon={HotelIcon} head={"Extensive Hotel Options"} para={"Best hotels available for different destinations to offer you the stay of a lifetime."} />
                    <WhyBookHotel icon={WalletIcon} head={"Savings on Hotel Booking"} para={"Enjoy hotel bookings with the best offers and discounts and make your stay unforgettable."} />
                    <WhyBookHotel icon={RatingIcon} head={"Hotel Ratings"} para={"All our hotels have good ratings on Trip Advisor and are recommended by users."} />
                    <WhyBookHotel icon={BeachIcon} head={"Best Price"} para={"Get excellent hotels/resorts at the best prices to pamper your desires."} />
                </div>
            </div>

            <div>
                <div>
                    <h1>FAQ's</h1>
                </div>
                <div>
                    <Accordion 
                        title={"How can I save while booking hotels ?"}
                        content={"To save on your hotel reservation, you should try to book them in advance by comparing the best deals on various websites. One important thing that every traveler should know is that hotels in India have different GST rates depending on their tariff. The GST rate for hotels with a tariff between Rs 1,001 and RS 7,500 per night is 12% and the GST rate for hotels with a tariff equal to or above Rs 7,501 per night is 18%. So, you can create a great difference here."}
                        content1={"You can plan your stay opposite to what others do. Hotels in business hubs are cheaper during the weekends but resorts are reasonably priced during the weekdays. Everyone knows the reason behind this. If you follow this rule, it will help you crack the best deals on hotels."}                       
                        content2={"Booking hotels within a cancellation period can do wonders with hotel booking amount. The period is usually between 24 and 48 hours prior to the scheduled stay. Due to the last-minute cancellation of the hotel rooms, booking is available at a lower price. Although this is a little risky, but you might end up saving huge on hotels."}
                    />
                    <Accordion 
                        title={"Can I book a hotel with a local id?"}
                        content={"There is no law that allows hotel authorities to prohibit local couples from spending time with each other in a hotel room. Earlier hoteliers used to deny the local couples as they wanted to give preference to the guests who traveled from far as they usually occupy the room for more days but local couples hardly book a room for one day. However, due to the growing number of startups in the hotel industry, local couples can also book hotel rooms."}
                        content1={"There are some specific hotels which don't allow check-in with local ID proof but most of these are accepted now. Before booking a hotel, you may check on our website if someone can book a hotel with a local I'd proof or not. But most of the hotels allow check-in with a valid ID proof."}
                    />
                    <Accordion
                        title={"How can I get early check-in or late check-out in a hotel?"}
                        content={"Early check-ins or late checkouts in hotels are subject to availability and customers have to ask about this directly from the hotels. If a hotel reception is accommodating, they can provide their guests with both Early Check-in and Late Check-out or at least one of these. However, it also depends if rooms are available in the hotel or not. Usually, guests can enjoy free early check-in or late check-out of up to 2 hours."}
                    />
                    <Accordion
                        title={"How can unmarried couples book hotels in india?"}
                        content={"No law denies the stay of unmarried couples from booking and staying in a hotel. However, it solely depends on the hotel authority to allow check-ins in such hotels. Choosing to stay together is a personal choice, which can't be restricted."}
                        content1={"Unmarried couples should always try to book their hotels online for 2 persons by checking earlier if the hotel provides them entry or not. Here is a tip, unmarried couples or any couple shouldn't indulge in activities that unnecessarily draw the attention of people. Generally, hotel reception checks the id proofs and then allows the guests to check-in without making any fuss about if they are unmarried or married."}
                    />
                    <Accordion
                        title={"How can I book cheap hotel rooms in 5 star hotels?"}
                        content={"There are several 5-star hotels in various cities that are available at cheaper rates. To book cheap hotel rooms in 5-star hotels, one of the most important things that you can do is to be flexible about your dates. If you are not planning to travel during weekends, a stay can be booked at very cheaper rates."}
                        content1={"One more tip is to book hotels in the off-season. By booking a hotel room at a location where there is a lesser crowd during a particular weather, customers can get really cheap deals. Suppose if you are only looking for a staycation or are willing to stay in 5-star hotels, then you can choose to visit cities like Jaipur, Agra or any tourist place in Northern India during the summers. Booking hotels at hill stations during the rainy season can also be an opportunity to get rooms at cheaper rates."}
                    />
                    <Accordion
                        title={"How to book hotel online?"}
                        content={"Booking online hotels with EaseMyTrip is extremely hassle-free. Follow the below-mentioned steps to make your booking experience smooth."}
                        content1={`Step 1: Visit EaseMyTrip and tap on the Hotels tab.
                        Step 2: Enter the city name, location or specific hotel where you wish to book the stay at.
                        Step 3: Mention the Check-in and Check-out dates, as per your choice in the mentioned tab.
                        Step 4: Mention the number of rooms required as per the guest count in the "Rooms & Guests" section.
                        Step 5: Tap on the 'Search' button and you will be directed to a new page, where all the hotels are mentioned as per your requirements.
                        Step 6: After being redirected to the hotels, one can select the hotels, as per the amenities provided. You can also customize your search by selecting the options from the top left corner, like price range, ratings, nearby attractions, attractions and type of properties.
                        Step 7: After customizing the search, one can select the hotel and select the number of rooms required.
                        Step 8: After finalizing, you are required to tap on the 'Book Now' option.
                        Step 9: Fill in the details asked and tap on 'Continue to payment'.
                        Step 10: Now, make your payment using your preferred option. You can choose from a wide range of options from Debit cards, Credit cards, UPI, net banking, or wallet money.
                        Step 11: Once the payment is done, you will receive an Email and SMS for the same. You will also receive your e-ticket on mobile and email ID.`}
                        content2={"The process is simple and hassle-free. It is easy to book your travel online on EaseMyTrip app/web. Save your time by booking hotels online and get the best deals with EaseMyTrip."}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hotels