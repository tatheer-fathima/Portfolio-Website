import React from 'react'
import './ContactForm.css';

const ContactForm = () => {

  return (
    <>
    <div className="contact-form-content">
        <form>
            <div className="name-container">
                <input type="text" name = "firstname" placeholder="First Name" />
                <input type="text" name = "lastname" placeholder="Last Name" />
            </div>
            
            <input type="text" name = "email" placeholder="Email" />
            <textarea type="text" name = "message" placeholder="Message" rows={3}></textarea>
            <button>SEND</button>
        </form>  
    </div>
    <footer className="footer">
        <div className="social-links">
          <a href="https://www.instagram.com/_tatheer.fathima_/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://x.com/Tatheer_2004" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/in/tatheer-fathima-5ba16b275/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p>&copy; 2024 copyright all rights reserved.</p>
      </footer>
    </>
  )
}

export default ContactForm
