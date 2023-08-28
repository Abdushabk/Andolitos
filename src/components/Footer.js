import React, { useState } from 'react';
import footer from "./footer.png";
import emailjs from '@emailjs/browser';

const Footers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (window.confirm("Are you sure you want to send this message?")) {
      emailjs.sendForm('service_k2m0a5d', 'template_ve7huys', e.target, 'hmn9kaW0CL1VWFL6i')
        .then((result) => {
          console.log(result.text);
          // Reset form fields
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        }, (error) => {
          console.log(error.text);
        });
    }
  }

  return (
    <div id='contact'>
      <img className='Footer' src={footer} alt="s" />
      <div className='footer-container'>
        <form className='footer-form' onSubmit={sendEmail}>
          <input className='ename' type="text" placeholder='Name' name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
          <input className='e-email' type="email" placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <input className='esubject' type="text" placeholder='Subject' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)}></input>
          <textarea className='esubject' cols="50" rows="12" placeholder='Your message' name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <input className='e-btn' type="submit" value="Send Message"></input>
        </form>
      </div>
    </div>
  )
}

export default Footers;
