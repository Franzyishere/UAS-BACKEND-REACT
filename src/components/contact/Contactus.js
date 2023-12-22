import React from "react";
import "./style.css";

const ContactUs = () => {
  return (
    <section className="contact-section background">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-left">
            <h2>Contact Us</h2>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
              </div>
            </form>
          </div>
          <div className="contact-right">
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Your Message"></textarea>
            </div>
            <button className="btn-primary">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
