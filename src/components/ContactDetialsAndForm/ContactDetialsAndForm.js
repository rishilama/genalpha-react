import '../../pages/Contact/Contact.css'
import emailjs from '@emailjs/browser';

function ContactDetialsAndForm() {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_52su6p8', e.target, 'Qagx78jNx-CqQrOOI')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    
    return (
        <div className='contact-bg__color'>
            <div className='container'>
                <div className='second-section'>
                    <div className='left left__contact-section'>
                        <h1 className='contactInformation'>Contact Information</h1>

                        <div className='location'>
                            <div className='location__sub-head'>
                                <img src='img/location-dot-solid.svg' alt='location' className='loc' />
                                <h2>Genalpha Tutoring</h2>
                            </div>
                            <div className='location__sub-para'>
                                <h4 className='contact-details'>Jamshedpur, Jharkhand-832103</h4>
                            </div>
                        </div>

                        <div className='contact'>
                            <div className='contact__sub-head'>
                                <img src='img/phone-solid.svg' alt='location' className='ph' />
                                <h2>Contact Number</h2>
                            </div>
                            <div className='contact__sub-para'>
                                <h4 className='contact-details'>+91-9153278835</h4>
                            </div>
                        </div>

                        <div className='email'>
                            <div className='email__sub-head'>
                                <img src='img/envelope-solid.svg' alt='location' className='em' />
                                <h2>Email id</h2>
                            </div>
                            <div className='email__sub-para'>
                                <h4 className='contact-details'><a href="mailto:genalphatutoring@gmail.com" className="contact-link">genalphatutoring@gmail.com</a></h4>
                            </div>
                        </div>
                    </div>

                    
                    <div className='right right__contact-section'>
                        <form className="contact__form" onSubmit={sendEmail}>
                                
                            <label for="lname">Your name *</label>
                            <input type="text" name='name' placeholder="Name" required className="contact__form-text" />
                            
                            <label for="lname">Your email *</label>
                            <input type="email" name='email' placeholder="Email" required className="contact__form-text" />
                            
                            <label for="lname">Your Whatsapp number *</label>
                            <input type="text" name='whatsappnumber' placeholder="Whatsapp Number" required className="contact__form-text" />
                            
                            <label for="lname">Your Query *</label>
                            <textarea  rows="8" name='message' placeholder="Message" required className="contact__form-text"></textarea>
                            <div className="contact-btn">
                                <input type="submit" className="button contact-button" name="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetialsAndForm