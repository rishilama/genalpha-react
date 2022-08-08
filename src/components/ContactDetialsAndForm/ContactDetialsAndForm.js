import '../../pages/Contact/Contact.css'


function ContactDetialsAndForm() {
    return (
        <div className='container'>
            <div className='second-section'>
                <div className='left left__contact-section'>
                    <h2 className='contactInformation'>Contact Information</h2>

                    <div className='location'>
                        
                    </div>
                    <div className='contact'>
                        <h3 className='contact__sub-head'>
                            Contact Number
                        </h3>

                        <p className='contact__sub-number'>
                            +919153278835
                        </p>
                    </div>
                    <div className='email'>
                        <h3 className='email__sub-head'>
                            Email id
                        </h3>

                        <p className='email__sub-email'>
                            genalphatutoring@gmail.com
                        </p>
                    </div>
                </div>

                
                <div className='right right__contact-section'>

                </div>
            </div>
        </div>
    )
}

export default ContactDetialsAndForm