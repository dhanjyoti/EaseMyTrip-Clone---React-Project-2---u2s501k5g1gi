import React from 'react'
import BusBenefitCard from './bus-benefit-card'
import SafeSecure from '../../images/bus_Icons/bus-exclusive-options.png';
import LowestCharges from '../../images/bus_Icons/bus-payment-option.png';
import MeetCriteria from '../../images/bus_Icons/bus-discount2.png';
import Achieved from '../../images/bus_Icons/bus-operator.png';

const busbenefitcard = [
    {
        icon: SafeSecure,
        head: "Safe and Secure",
        para: "Book from a wide variety of buses, including AC, Non-AC, Deluxe, Volvo and more."
    },
    {
        icon: LowestCharges,
        head: "Lowest ticket charges",
        para: "Grab huge discounts and cashbacks on your bus booking with EaseMyTrip."
    },
    {
        icon: MeetCriteria,
        head: "Meet the criteria",
        para: "We give you freedom to choose your mode of payment. Pay through cards, net banking, UPI or mobile wallets."
    },
    {
        icon: Achieved,
        head: "Achieved 20k+ customer’s trust",
        para: "We have tied up with India’s best bus operators to make travel easy for our customers."
    }
]

const BusBenefit = () => {
  return (
    <div>
        <div>
            <h2 className='text-center text-[25px] font-semibold my-6'>Benefit of booking bus with EaseMyTrip</h2>
            <div className='flex flex-row justify-between mx-[142px]'>
                {busbenefitcard.map((item)=>{
                    return (<BusBenefitCard icon={item.icon} head={item.head} para={item.para} />);
                })}
            </div>
        </div>
        <div>
            <h2 className='text-center text-[25px] font-semibold my-6'>Gaining the trust day by day</h2>
            <div className='flex flex-row justify-center gap-36 text-center'>
                <div className='border shadow-[7px_5px_30px_rgb(72_73_121_/_15%)] py-[25px] px-28 rounded-[5px]'>
                    <p className='text-sm text-[#5f5f5f]'>Our Trusted Operators</p>
                    <p className='text-[40px] font-lg'>3999+</p>
                </div>
                <div className='border shadow-[7px_5px_30px_rgb(72_73_121_/_15%)] py-[25px] px-28 rounded-[5px]'>
                    <p className='text-sm text-[#5f5f5f]'>No. of Tickets Booked</p>
                    <p className='text-[40px] font-lg'>499999+</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusBenefit