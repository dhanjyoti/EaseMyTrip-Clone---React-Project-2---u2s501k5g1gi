import React from 'react'
import WhyBookTrain from './WhyBookTrain'
import FAQs from './FAQs'
import GrabDeals from './GrabDeals'
import TrainRoute from './TrainRoute'
import TrainAppComponent from './TrainAppComponent'
import SearchBar from './search'

const Train = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-[#2F80ED] to-[#56CCF2] py-12 px-4">
        <SearchBar />
      </div>
        <WhyBookTrain/>
        {/* <TrainRoute/> */}
        <GrabDeals/>
        <FAQs/>
        <TrainAppComponent/>
    </div>
  )
}

export default Train