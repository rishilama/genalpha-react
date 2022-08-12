import React from 'react'
import { Link } from 'react-router-dom'
import '../../pages/Details/Details'

function BookingSection() {
    return (
        <div className="book-container">
            <h1 className="booking-head">Book a free trial</h1>
            <p className="booking-para">Contact Gen Alpha +919153278835 or write to <a href="mailto:genalphatutoring@gmail.com" className="mailto">genalphatutoring@gmail.com</a> in case of queries!</p>
            <Link to="/book-a-class" onClick={()=> window.scrollTo({ top: 0, left: 0})} className="booking-free-trial_btn">Book Now</Link>
        </div>
    )
}

export default BookingSection