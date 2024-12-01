import React from "react";
import "./Contact.css";
import ContactCard from "./ContactCard/ContactCard";
import img from '../../assets/mail.png';
import img2 from "../../assets/git.png";
import ContactForm from "./ContactForm/ContactForm";
const Contact = () => {
  return (
    <section className="contact-container" id="contact">
    <h5>Contact Me</h5>

    <div className="contact-content">
      <div style = {{flex: 1}}>
        <ContactCard 
        iconUrl = {img}
        text="tatheerfathima2004@gmail.com"
        />
        <ContactCard 
        iconUrl = {img2}
        text="https://github.com/T-Fathima"
        />
      </div>
      <div style = {{flex: 1}}>
        <ContactForm />
      </div>
    </div>
</section>
  )
}

export default Contact;