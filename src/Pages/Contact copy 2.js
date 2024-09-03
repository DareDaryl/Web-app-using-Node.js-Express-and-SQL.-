import React from 'react';
import './Contact.css'; // Import CSS for styling

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or comments, feel free to reach out to us using the form below or through the contact details provided.</p>
      
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> contact@example.com</p>
        <p><strong>Phone:</strong> +1 (234) 567-8901</p>
        <p><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
      </div>
      
      <h2>Send Us a Message</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
      
      {/* Optional: Add a map to show your location */}
      <div className="map">
        <h2>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.181194225557!2d-122.08385118469229!3d37.38605177983191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5f74aa2e39b%3A0x9f7ebd77d9297b7e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1636352927618!5m2!1sen!2sus"
          width="600"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;

/*import React from 'react';

function Contact() {
  return <h2>Contact Page</h2>;
}

export default Contact;*/
