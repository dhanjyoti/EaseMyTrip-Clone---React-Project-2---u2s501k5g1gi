import React from 'react'
import './footer.css'
import EaseMyTrip from '../../images/footerImage/EMTLogo_white.png'
import GooglePlay from '../../images/footerImage/androidft.png'
import AppStore from '../../images/footerImage/iosnovft.png'
import QrCode from '../../images/footerImage/qrcode.png'
import BottomImage from '../../images/footerImage/botft.png'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-row'>
                <div>
                    <img src={EaseMyTrip} />
                    <div>
                        <p>
                            EaseMyTrip offers 'End to End' travel solutions including air tickets for more than 400 international and domestic airlines, hotel bookings for nearly 1 million hotels in India and abroad, cab booking with 4000+ cab operators, bus tickets with 2000+ bus operators, and railway tickets in India for all major cities.
                        </p>
                    </div>
                </div>
                <div>
                    <div>Download EaseMyTrip App</div>
                    <div className='flex flex-row'>
                        <div>
                            <img src={GooglePlay} />
                        </div>
                        <div>
                            <img src={AppStore} />
                        </div>
                    </div>
                </div>
                <div>
                    <div>SCAN QR CODE</div>
                    <div>
                        <img src={QrCode} />
                    </div>
                </div>
            </div>
            <div className='flex flex-row w-[515px] h-[29px]'>
                <div>
                    <p>Copyright ©</p>
                </div>
                <div>
                    <img src={BottomImage} />
                </div>
            </div>
        </div>
    )
}

export default Footer