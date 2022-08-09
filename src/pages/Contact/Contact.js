import './Contact.css'
import ContactDetailsAndForm from '../../components/ContactDetialsAndForm/ContactDetialsAndForm'

import React from 'react'
import ContactMap from '../../components/ContactMap/ContactMap'

function Contact() {
  return (
    <div className='mainBody'>
      <ContactMap />
      <ContactDetailsAndForm />
    </div>
  )
}

export default Contact