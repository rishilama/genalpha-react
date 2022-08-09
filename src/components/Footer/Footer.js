import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer>
        <div className="container">
            <div className="footer-content">
                <div className="column-1">
                    <Link to="/"><img src="/img/Logo3.png" alt="logo" className="logo footer-logo" /></Link>
                 
                </div>
                <div className="column-2">
                    <h3 className="column-heading">
                        USEFUL LINKS
                    </h3>
                    <div className="useful-link__container">
                        <ul className="footer-link">
                            <div className="useful-links__right-side">
                                <li className="footer__link-item"><Link to="/courses" className="footer__link-item__links" onClick={() => {window.scrollTo({ top: 0, left: 0})}}>Courses</Link></li>
                                <li className="footer__link-item"><Link to="/faq" className="footer__link-item__links" onClick={() => {window.scrollTo({ top: 0, left: 0})}}>FAQ</Link></li>
                                <li className="footer__link-item"><Link to="/tac" className="footer__link-item__links" onClick={() => {window.scrollTo({ top: 0, left: 0})}}>Terms & Conditions</Link></li>    
                            </div>
                            <div className="useful-links__right-side">
                                <li className="footer__link-item"><Link to="/about" className="footer__link-item__links" onClick={() => {window.scrollTo({ top: 0, left: 0})}}>About Us</Link></li>
                                <li className="footer__link-item"><Link to="/contact" className="footer__link-item__links" onClick={() => {window.scrollTo({ top: 0, left: 0})}}>Contact</Link></li>
                            </div>    
                        </ul>
                    </div>
                </div>
                <div className="column-3">
                    <h3 className="column-heading">
                        Contact Us
                    </h3>
                    <ul className="contact-details">
                        <li className="footer__link-item"><p className="footer__link-item__links">Tel: +919153278835</p>
                        </li>
                        <li className="footer__link-item">
                            <a href="mailto:genalphatutoring@gmail.com" className="footer__link-item__links">genalphatutoring@gmail.com</a></li>
                    </ul>
                    <h3 className="column-heading">
                        Location
                    </h3>
                    <ul className="location-details">
                        <li className="footer__link-item"><p className="footer__link-item__links">Jamshedpur,
                                Jharkhand-832103</p></li>
                    </ul>
                </div>
                <div className="column-4">
                    <h3 className="column-heading">
                        Keep in touch
                    </h3>
                    <ul className="social-icons">
                        <li className="small-social-icon"><Link to="/"><i className="fa fa-facebook-official" aria-hidden="true"></i></Link></li>
                        <li className="small-social-icon"><a href="https://wa.me/919153278835"><i className="fa fa-whatsapp" aria-hidden="true"></i> </a></li>
                        <li className="small-social-icon"><a href="mailto:genalphatutoring@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i> </a></li>
                        <li className="small-social-icon"><Link to="/"><i className="fa fa-youtube" aria-hidden="true"></i></Link></li>
                        <li className="small-social-icon"><Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>

                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer