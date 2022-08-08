import React from 'react'

function FreeTrialSection() {
  return (
    <div>
        <div className="free-trail-section">
        <div className="free-trail-section__img"></div>

        <div className="free-trail-section__content">
            <h1 className="free-trail-section__head free-head">Book a Free Trial</h1>
            <a href="/" className="free-trial__button button">Book Now</a>
            <hr className="rule" />


            <h1 className="free-trail-section__head">Having any query? <br />Click on Whatsapp logo below</h1>


            <div className="wa">
                <a href="https://wa.me/919153278835"> <img src="/img/WhatsApp.svg.png" alt="whatsapp-logo" className="wa-logo" /></a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default FreeTrialSection