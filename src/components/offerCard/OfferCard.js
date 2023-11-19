import React from 'react'
import CardOffer_code from '../../images/cardOffer_code'

const OfferCard = ({tagline, dealName, code, image, para, validity}) => {
  return (
    <div className='border-2 border-blue-600'>
        <div>
            <div>
                <div>
                    <p>{tagline}</p>
                    <p>{dealName}</p>
                </div>
                <div>
                    <div>
                        <p>Use Code:</p>
                        <h3>{code}</h3>
                    </div>
                    <div>
                        <CardOffer_code/>
                    </div>
                </div>
            </div>
            <div><img src={image}/></div>
        </div>
        <div>{para}</div>
        <div>{validity}</div>
    </div>
  )
}

export default OfferCard