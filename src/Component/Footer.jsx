import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className="hotel-footer">

      <div className="footer-container">

        {/* HOTEL INFORMATION */}
        <div className="footer-about">
          <img src="/logo.png" alt="Hotel Paradise Jaisalmer" />

          <h3>Hotel Paradise</h3>

          <p>
            Experience the royal charm of Rajasthan at Hotel Paradise.
            Discover the beauty of Jaisalmer, enjoy warm hospitality
            and create unforgettable memories.
          </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/accommodation">Accommodation</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/booking">Book Now</Link>
        </div>

        {/* FACILITIES */}
        <div className="footer-links">
          <h3>Our Facilities</h3>

          <Link to="/facilities/activities">Activities</Link>
          <Link to="/facilities/spa">Spa & Wellness</Link>
          <Link to="/facilities/view">Desert View</Link>
          <Link to="/facilities/advantage">Our Advantages</Link>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="footer-contact">
          <h3>Contact Information</h3>

          <p>
            <span>📍</span>
            Jaisalmer, Rajasthan, India
          </p>

          <p>
            <span>📞</span>
            Contact us for reservations
          </p>

          <p>
            <span>✉️</span>
            Get in touch for enquiries
          </p>

          <Link to="/contact" className="footer-contact-btn">
            Contact Us →
          </Link>
        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Hotel Paradise Jaisalmer.
          All Rights Reserved.
        </p>

        <p>Designed with ♥ for a memorable stay in Jaisalmer</p>
      </div>

    </footer>
  );
}

export default Footer;