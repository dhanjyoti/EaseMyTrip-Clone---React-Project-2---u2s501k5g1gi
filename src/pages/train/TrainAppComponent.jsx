import React from 'react'
import TrainApp from '../../images/trainComponent/train-mobile2.png';
import AwardLogoTrain from '../../images/trainComponent/award-logo-train.png';
import GooglePlay from '../../images/trainComponent/google-play.png';
import AppleStore from '../../images/trainComponent/app-store.png';
import QRCode from '../../images/trainComponent/app-qr-code.svg';

const TrainAppComponent = () => {
  return (
    <div className='mx-[155px] flex flex-row justify-between gap-4'>
        <div>
            <span className='absolute w-[350px] h-[350px] bg-gradient-to-tr from-blue-200 via-blue-300 to-blue-500 rounded-full'></span>
            <img className='z-10 relative w-[269px] h-[335px]' src={TrainApp} />
        </div>
        <div className='border-r border-[#adadad]'>
            <div className='text-[21px] font-semibold'>Highest Rated* Travel App</div>
            <div className='mt-[30px] grid grid-cols-2 text-[#5c5c5c]'>
                <div className='text-left'>
                    <div className='text-[#333] text-[42px] font-semibold'>4.6</div>
                    <div className='flex flex-row'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
                        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"></path>
                        </svg>
                    </div>
                    <div className='my-2 flex text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"></path></svg>
                        &nbsp;
                        <span>4,83,459</span>
                    </div>
                </div>
                <div>
                    <div className='flex items-center'>
                        <span>5</span>
                        <div className='w-[60%] h-[14px] bg-[#3ec12f] ml-[7px]'></div>
                    </div>
                    <div className='flex items-center'>
                        <span>4</span>
                        <div className='w-[60%] h-[14px] bg-[#80dd87] ml-[7px]'></div>
                    </div>
                    <div className='flex items-center'>
                        <span>3</span>
                        <div className='w-[20%] h-[14px] bg-[#e1d013] ml-[7px]'></div>
                    </div>
                    <div className='flex items-center'>
                        <span>2</span>
                        <div className='w-[12%] h-[14px] bg-[#d57522] ml-[7px]'></div>
                    </div>
                    <div className='flex items-center'>
                        <span>1</span>
                        <div className='w-[5%] h-[14px] bg-[#ff7373] ml-[7px]'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center border-r border-[#adadad] '>
            <img className='absolute w-[18%] px-[22px]' src={AwardLogoTrain}/>
            <div className='relative w-[90%]'>
                <p className='text-[21px] font-semibold mt-[79px]'>Trusted by</p>
                <p className='text-[22px] font-bold mt-[26px]'>20 Million+ Customers</p>
            </div>
        </div>
        <div className='w-[23%]'>
            <div>
                <div className='text-[21px] font-semibold'>Download EaseMyTrip App</div>
                <p className='text-[15px] pt-[10px] pb-[5px]'>for Hassle-Free Train Ticket Booking</p>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col gap-[7px]'>
                    <img className='w-[155px] h-[47px]' src={GooglePlay}/>
                    <img className='w-[155px] h-[47px]' src={AppleStore}/>
                </div>
                <img className='w-[100px]' src={QRCode}/>
            </div>
        </div>
    </div>
  )
}

export default TrainAppComponent