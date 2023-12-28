import React from 'react';
import Footer from './Footer';


function Contact() {
  return (
    <div>
    
    <div className='Contactme'>
        <h1>Contact Us</h1>
        <div>
          <address>
            K-279 , Keshavpuram,<br />
            Kanpur , Uttar Pradesh
          </address>
          <a className='number' href="tel:+6306952293">
            +91 6306952293
          </a><br />
          <a className='number' href="mailto:ayushchaurasia44@gmail.com">
            ayushchaurasia44@gmail.com
          </a>
          <div className="my-icons  ">
           <a  href="https://www.facebook.com/ayush.chaurasia.564"><i class='bx bxl-facebook'></i></a>
           <a  href="https://www.instagram.com/_ineffable_ayush_/"><i class='bx bxl-instagram'></i></a>
           <a  href="https://twitter.com/login?lang=en"><i class='bx bxl-twitter '></i></a>
           </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
</div>
  )
}

export default Contact;