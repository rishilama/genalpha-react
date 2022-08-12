import '../../pages/BookingFormPage/BookingFormPage.css'
import emailjs from '@emailjs/browser';

import React from 'react'

function OldStudent() {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_ot8ybcs', e.target, 'Qagx78jNx-CqQrOOI')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return (
        <>
            <p className='new-student__text'>Love our content? Tell us what you want to learn more!</p>
            <form className="book__form" onSubmit={sendEmail}>
                                    
                <label htmlFor="sname">Student's name *</label><br />
                <input type="text" name='student_name' placeholder="Student's Name" required className="contact__form-text" />
                <br />
                <label htmlFor="pname">Parent's name *</label><br />
                <input type="text" name='parent_name' placeholder="Parent's Name" required className="contact__form-text" />
                <br />
                <label htmlFor="wno">Whatsapp number *</label><br />
                <input type="text" name='whatsapp_number' placeholder="Whatsapp number" required className="contact__form-text" />
                <br />
                <label htmlFor="country">Country *</label><br />
                <input type="text" name='country' placeholder="Country" required className="contact__form-text" />
                <br />
                <label htmlFor="timezone">Time Zone</label><br />
                <input type="text" name='time_zone' placeholder="Time Zone"  className="contact__form-text" />
                <br />
                <label htmlFor="courses">Courses *</label><br />
                <input type="text" name='courses' placeholder="Courses" required className="contact__form-text" />
                <br />
                
                <div className="booking-form__btn">
                    <input type="submit" className="booking-form__button" name="Submit" />
                </div>
            </form>
        </>
    )
}

export default OldStudent