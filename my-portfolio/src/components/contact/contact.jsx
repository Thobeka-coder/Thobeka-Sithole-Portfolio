import './contact.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_h9lcf5l', 'template_sugo5t5', formRef.current, 'iX2nxQJV3xtXAnisC')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className='c'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
          <div className='c-left'>
              <h1 className='c-title'>Contact Details</h1>
              <div className='c-info'>
                  <div className='c-info-item'>
                      <img src={Phone} alt='' className='c-icon'/>
                      +27 81 542 0460
                  </div>
                  <div className='c-info-item'>
                      <img src={Email} alt='' className='c-icon'/>
                      thobekasithole3@gmail.com
                  </div>
                  <div className='c-info-item'>
                      <img src={Address} alt='' className='c-icon'/>
                      Cape Town, South Africa
                  </div>
              </div>
          </div>
          <div className='c-right'>
          <p className="c-desc">
            <b>What is your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
              <input type='text' placeholder='Name' name='user_name' />
              <input type='text' placeholder='Email' name='user_email' />
              <input type='text' placeholder='Subject' name='user_subject' />
              <textarea rows='5' placeholder='Message' name='message'/>
              <button>Submit</button>
              
              {done && "Message sent"}
          </form>
          </div>
      </div>
    </div>
  )
}

export default Contact
