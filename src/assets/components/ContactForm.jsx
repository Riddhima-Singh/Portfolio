import React from 'react';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
      <h2 id="contact">Get In Touch</h2>
        <form action="https://formspree.io/f/mgvknewy" method="POST">
        <div className="row">
          <input type="text" name="firstName" placeholder="First Name" required />
          <input type="text" name="lastName" placeholder="Last Name" required />
        </div>
        <div className="row">
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="text" name="phone" placeholder="Phone No." />
        </div>
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
};

export default ContactForm;
