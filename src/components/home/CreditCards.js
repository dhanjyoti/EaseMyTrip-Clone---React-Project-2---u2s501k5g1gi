import React from 'react'

const CreditCards = ({tagLine, offerHead, code, icon, offers, validity}) => {
  return (
    <div>
        <div>
          <div>
            <p>{tagLine}</p>
            <p>{offerHead}</p>
            <div>
              <div>
                <p>Use Code:</p>
                <p>{code}</p>
              </div>
              <div>%%</div>
            </div>
          </div>
          <div>{icon}</div>
        </div>
        <div>{offers}</div>
        <div>{validity}</div>
    </div>
  )
}

export default CreditCards;