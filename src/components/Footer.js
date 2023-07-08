import React from 'react'
import footer from "./footer.png"
import emailjs from '@emailjs/browser';

const Footers = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_k2m0a5d', 'template_ve7huys', e.target, 'hmn9kaW0CL1VWFL6i')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div>
      <img className='Footer' src={footer} alt="s" />
      <div className='footer-container'>
        <form className='footer-form' onSubmit={sendEmail}>
          <input className='ename' type="text" placeholder='Name' name='name'></input>
          <input className='e-email' type="email" placeholder='Email' name='email'></input>
          <input className='esubject' type="text" placeholder='Subject' name='subject'></input>
          <textarea className='esubject' cols="50" rows="12" placeholder='your message' name='message'></textarea>
          <input className='e-btn' type="submit" value="Send Message"></input>
        </form>
      </div>
    </div>
  )
}

export default Footers