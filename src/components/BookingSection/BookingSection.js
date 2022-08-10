import React from 'react'
import '../../pages/Details/Details'

function BookingSection() {
    return (
        <div className="book-container">
            <h1 className="booking-head">Book a free trial</h1>
            <p className="booking-para">Contact Gen Alpha +919153278835 or write to <a href="mailto:genalphatutoring@gmail.com" className="mailto">genalphatutoring@gmail.com</a> in case of queries!</p>
            <a href="https://forms.gle/2Jq74yvXKfAjbvJYA" className="booking-free-trial_btn">Book Now</a>
        </div>
    )
}

export default BookingSection