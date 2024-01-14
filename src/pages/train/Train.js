import React from 'react'
import WhyBookTrain from './WhyBookTrain'
import FAQs from './FAQs'
import GrabDeals from './GrabDeals'
import TrainRoute from './TrainRoute'
import TrainAppComponent from './TrainAppComponent'

const Train = () => {
  return (
    <div>
        <WhyBookTrain/>
        <TrainRoute/>
        <GrabDeals/>
        <FAQs/>
        <TrainAppComponent/>
    </div>
  )
}

export default Train