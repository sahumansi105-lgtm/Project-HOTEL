
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

function Home() {

  // HERO IMAGES 
  const heroImages = [
    "/image01.jpg",
    "/image07.jpg",
    "/image6.jpg",
    "/image03.jpg"
  ];

  const [activeImage, setActiveImage] = useState(0);

  // Automatically change hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home-page">

      {/* ================= HERO SECTION ================= */}

      <section className="home-hero">

        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`hero-background ${
              activeImage === index ? 'show' : ''
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        <div className="hero-dark-overlay"></div>

        <div className="home-hero-content">

          <span className="hero-eyebrow">
            ✦ WELCOME TO HOTEL PARADISE ✦
          </span>

          <h1>
            Discover The Beauty
            <br />
            Of <span>Golden Jaisalmer</span>
          </h1>

          <p>
            Experience the charm of Rajasthan, where
            royal heritage, warm hospitality and
            unforgettable memories come together.
          </p>

          <div className="hero-actions">
            <Link to="/Accommodation" className="hero-primary-btn">
              Explore Accommodation
            </Link>

            <Link to="/Contact" className="hero-outline-btn">
              Enquire Now
            </Link>
          </div>

        </div>

        {/* SLIDER INDICATORS */}

        <div className="hero-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={activeImage === index ? 'active' : ''}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
        </div>

        <div className="hero-bottom-text">
          JAISALMER • RAJASTHAN • INDIA
        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}

      <section className="welcome-section">

        <div className="welcome-image">
          <img src="/image07.jpg" alt="Hotel Paradise Jaisalmer" />
          <div className="image-caption">
            The Golden Charm of Rajasthan
          </div>
        </div>

        <div className="welcome-content">

          <span className="section-label">
            YOUR JOURNEY BEGINS HERE
          </span>

          <h2>
            A Beautiful Escape
            <br />
            Into The <span>Golden City</span>
          </h2>

          <p>
            Welcome to Hotel Paradise, your destination
            to discover the beauty and charm of Jaisalmer.
            Experience the warmth of Rajasthan and enjoy
            a memorable stay surrounded by the spirit
            of the Golden City.
          </p>

          <p>
            Whether you are exploring the city's heritage
            or simply enjoying a relaxing getaway, let
            every moment become a beautiful memory.
          </p>

          <Link to="/Contact" className="text-link">
            Discover More <span>→</span>
          </Link>

        </div>

      </section>


      {/* ================= ACCOMMODATION ================= */}

      <section className="accommodation-section">

        <div className="section-heading">
          <span className="section-label">COMFORT & ELEGANCE</span>

          <h2>
            Your Perfect <span>Stay</span>
          </h2>

          <p>
            Discover accommodation designed to make
            your Jaisalmer visit comfortable and memorable.
          </p>
        </div>

        <div className="stay-grid">

          <div className="stay-card">
            <img src="/image01.jpg" alt="Hotel accommodation" />

            <div className="stay-card-content">
              <span>COMFORT & STYLE</span>
              <h3>Beautiful Accommodation</h3>
              <Link to="/Accommodation">
                Explore Rooms →
              </Link>
            </div>
          </div>

          <div className="stay-card">
            <img src="/image6.jpg" alt="Hotel interior" />

            <div className="stay-card-content">
              <span>RELAX & UNWIND</span>
              <h3>A Memorable Stay</h3>
              <Link to="/Accommodation">
                Discover More →
              </Link>
            </div>
          </div>

        </div>

        <div className="center-button">
          <Link to="/Accommodation" className="gold-button">
            View All Accommodation
          </Link>
        </div>

      </section>


      {/* ================= FACILITIES ================= */}

      <section className="facilities-section">

        <div className="section-heading">
          <span className="section-label">EXPERIENCE MORE</span>

          <h2>
            Explore Our <span>Facilities</span>
          </h2>

          <p>
            Make your stay even more memorable by
            exploring what Hotel Paradise has to offer.
          </p>
        </div>

        <div className="facility-grid">

          <Link to="/Facilities/Activities" className="facility-card">
            <img src="/image03.jpg" alt="Hotel activities" />
            <div className="facility-overlay">
              <h3>Activities</h3>
              <span>Explore More →</span>
            </div>
          </Link>

          <Link to="/Facilities/Spa" className="facility-card">
            <img src="/image07.jpg" alt="Spa facilities" />
            <div className="facility-overlay">
              <h3>Relax & Rejuvenate</h3>
              <span>Explore More →</span>
            </div>
          </Link>

          <Link to="/Facilities/View" className="facility-card">
            <img src="/image6.jpg" alt="Hotel views" />
            <div className="facility-overlay">
              <h3>Beautiful Views</h3>
              <span>Explore More →</span>
            </div>
          </Link>

        </div>

      </section>


      {/* ================= JAISALMER EXPERIENCE ================= */}

      <section className="experience-section">

        <div className="experience-overlay"></div>

        <div className="experience-content">

          <span className="section-label">
            EXPLORE THE GOLDEN CITY
          </span>

          <h2>
            Feel The Magic
            <br />
            Of <span>Rajasthan</span>
          </h2>

          <p>
            Discover the timeless beauty, golden
            architecture and rich cultural heritage
            of Jaisalmer.
          </p>

          <Link to="/Events" className="hero-primary-btn">
            Explore Experiences
          </Link>

        </div>

      </section>


      {/* ================= EVENTS ================= */}

      <section className="events-section">

        <div className="section-heading">
          <span className="section-label">SPECIAL MOMENTS</span>

          <h2>
            Events & <span>Celebrations</span>
          </h2>

          <p>
            Explore memorable occasions and special
            experiences at Hotel Paradise.
          </p>
        </div>

        <div className="event-content">

          <img src="/image03.jpg" alt="Hotel events and celebrations" />

          <div>
            <span className="section-label">
              MAKE EVERY MOMENT SPECIAL
            </span>

            <h3>
              Celebrate Beautiful Moments
            </h3>

            <p>
              Discover our events and experiences
              and make your visit to Jaisalmer special.
            </p>

            <Link to="/Events" className="text-link">
              Explore Events →
            </Link>
          </div>

        </div>

      </section>


      {/* ================= FINAL BOOKING CTA ================= */}

      <section className="booking-section">

        <span>YOUR JAISALMER EXPERIENCE AWAITS</span>

        <h2>
          Ready For Your
          <br />
          Perfect Getaway?
        </h2>

        <p>
          Plan your visit and get in touch with us
          to enquire about your stay.
        </p>

        <Link to="/booking" className="booking-cta-btn">
          Book Your Stay →
        </Link>

      </section>

    </main>
  );
}

export default Home;
