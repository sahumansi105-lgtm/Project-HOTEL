import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Spa.css";

function Spa() {
  const spaFeatures = [
    {
      id: 1,
      icon: "✦",
      title: "Relaxing Therapies",
      description:
        "Unwind and take a break from everyday stress with a peaceful wellness experience.",
    },
    {
      id: 2,
      icon: "❋",
      title: "Rejuvenating Treatments",
      description:
        "Enjoy soothing treatments designed to help you feel refreshed and relaxed.",
    },
    {
      id: 3,
      icon: "✧",
      title: "Peaceful Ambience",
      description:
        "Discover a calming atmosphere where you can slow down and enjoy a moment of tranquillity.",
    },
  ];

  return (
    <div className="spa-page">

      {/* HERO SECTION */}
      <section className="spa-hero">
        <div className="spa-hero-content">
          <span>RELAX • REFRESH • REJUVENATE</span>

          <h1>A Peaceful Escape for Your Senses</h1>

          <div className="spa-divider"></div>

          <p>
            Take a moment for yourself and discover the beauty
            of relaxation during your stay in Jaisalmer.
          </p>

          <a href="#spa-experience" className="spa-hero-btn">
            Explore Wellness
          </a>
        </div>
      </section>

      {/* SPA INTRODUCTION */}
      <section className="spa-intro" id="spa-experience">
        <div className="spa-intro-image">
          <img src="/spa.jpg" alt="Spa and wellness experience" />
        </div>

        <div className="spa-intro-content">
          <span>YOUR MOMENT OF TRANQUILLITY</span>

          <h2>Relax Your Body, Refresh Your Mind</h2>

          <div className="spa-line"></div>

          <p>
            Escape the rush of everyday life and enjoy a relaxing
            wellness experience. Our spa concept celebrates comfort,
            peaceful surroundings and the art of taking time for yourself.
          </p>

          <p>
            Whether you are unwinding after a desert adventure or
            simply looking for a peaceful moment, make relaxation
            part of your Jaisalmer journey.
          </p>

          <Link to="/contact" className="spa-contact-btn">
            Enquire About Spa
          </Link>
        </div>
      </section>

      {/* WELLNESS FEATURES */}
      <section className="spa-features-section">
        <div className="spa-section-heading">
          <span>THE ART OF WELLNESS</span>
          <h2>Experience Complete Relaxation</h2>
          <p>
            Make time for comfort, calmness and a refreshing experience.
          </p>
        </div>

        <div className="spa-features">
          {spaFeatures.map((feature) => (
            <div className="spa-feature-card" key={feature.id}>
              <div className="spa-feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="spa-banner">
        <div className="spa-banner-content">
          <span>MAKE TIME FOR YOURSELF</span>

          <h2>Your Journey to Relaxation Begins Here</h2>

          <p>
            Complete your Jaisalmer getaway with moments of
            comfort and tranquillity.
          </p>

          <Link to="/booking" className="spa-banner-btn">
            Book Your Stay
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Spa;