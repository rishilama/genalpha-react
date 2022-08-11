import './Contact.css'
import ContactDetailsAndForm from '../../components/ContactDetialsAndForm/ContactDetialsAndForm'

import React from 'react'
import ContactMap from '../../components/ContactMap/ContactMap'
import FixedWhatsappComp from '../../components/FixedWhatsappComp/FixedWhatsappComp'

function Contact() {
  return (
    <div className='mainBody'>
      <ContactMap />
      <ContactDetailsAndForm />
      <FixedWhatsappComp />
    </div>
  )
}

export default Contact