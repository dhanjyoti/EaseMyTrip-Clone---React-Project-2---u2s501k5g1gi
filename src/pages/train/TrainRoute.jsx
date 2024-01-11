import React from 'react'
import ComponentTrainRoute from './ComponentTrainRoute'

const TrainRoute = () => {
    return (
        <div className='my-8'>
            <h3 className='text-center mb-[15px] text-xl font-semibold'>Top Train Ticket Routes</h3>
            <div className='border border-gray-300 p-6 flex flex-row justify-between mx-[155px]'>
                <div className='flex flex-col gap-4'>
                    <ComponentTrainRoute name={"NEW DELHI -JAMMU TAWI(NDLS-JAT)"} />
                    <ComponentTrainRoute name={"NEW DELHI -PATNA JN(NDLS-PNBE)"} />
                    <ComponentTrainRoute name={"HOWRAH JN -JAIPUR(HWH-JP)"} />
                    <ComponentTrainRoute name={"HYDERABAD DECAN -CHENNAI CENTRAL(HYB-MAS)"} />
                    <ComponentTrainRoute name={"MUMBAI CENTRAL -PUNE JN(BCT-PUNE)"} />
                </div>
                <div className='flex flex-col gap-4'>
                    <ComponentTrainRoute name={"PATNA JN -GUWAHATI(PNBE-GHY)"} />
                    <ComponentTrainRoute name={"NEW DELHI -LUCKNOW NE(NDLS-LJN)"} />
                    <ComponentTrainRoute name={"VIJAYAWADA JN -CHENNAI CENTRAL(BZA-MAS)"} />
                    <ComponentTrainRoute name={"INDORE JN BG -MUMBAI CENTRAL(INDB-BCT)"} />
                    <ComponentTrainRoute name={"JAIPUR -AHMEDABAD JN(JP-ADI)"} />
                </div>
            </div>
        </div>
    )
}

export default TrainRoute