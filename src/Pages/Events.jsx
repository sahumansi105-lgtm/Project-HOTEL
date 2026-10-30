
import React from "react";
import "../Styles/Events.css";

function Events() {
  const events = [
    {
      id: 1,
      title: "Weddings & Pre-Weddings",
      image: "/e1.jpg",
      description:
        "Celebrate your special moments in a royal atmosphere surrounded by the golden beauty of Jaisalmer.",
      category: "Special Celebrations",
    },
    {
      id: 2,
      title: "Cultural Evenings",
      image: "/e02.jpg",
      description:
        "Experience the vibrant traditions of Rajasthan with folk music, traditional dance and unforgettable evenings.",
      category: "Rajasthani Heritage",
    },
    {
      id: 3,
      title: "Desert Experiences",
      image: "/e03.jpg",
      description:
        "Enjoy memorable desert adventures and discover the magic of Jaisalmer's golden landscapes.",
      category: "Desert Adventures",
    },
    {
      id: 4,
      title: "Corporate Events",
      image: "/e04.jpg",
      description:
        "Bring people together in a welcoming setting designed for business gatherings, meetings and special occasions.",
      category: "Business Gatherings",
    },
  ];

  return (
    <div className="events-page">

      {/* HERO SECTION */}
      <section className="events-hero">
        <div className="events-hero-overlay">
          <span className="events-tagline">
            CELEBRATE • EXPERIENCE • CREATE MEMORIES
          </span>

          <h1>Events & Celebrations</h1>

          <div className="events-divider"></div>

          <p>
            Every occasion deserves a beautiful setting.
            Celebrate life's special moments with royal hospitality
            and the timeless charm of Jaisalmer.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="events-intro">
        <span className="events-small-heading">SPECIAL MOMENTS, ROYAL EXPERIENCES</span>

        <h2>Make Every Celebration Extraordinary</h2>

        <p>
          From beautiful wedding celebrations to vibrant cultural evenings
          and memorable desert experiences, Hotel Paradise Palace offers
          a setting where every gathering becomes a cherished memory.
        </p>
      </section>

      {/* EVENT CARDS */}
      <section className="events-container">

        {events.map((event) => (
          <div className="event-card" key={event.id}>

            <div className="event-image">
              <img src={event.image} alt={event.title} />

              <span className="event-category">
                {event.category}
              </span>
            </div>

            <div className="event-content">
              <h3>{event.title}</h3>

              <p>{event.description}</p>
            </div>

          </div>
        ))}

      </section>

      {/* BOTTOM BANNER */}
      <section className="events-banner">
        <div className="events-banner-content">
          <span>YOUR SPECIAL OCCASION STARTS HERE</span>

          <h2>Let's Create Beautiful Memories Together</h2>

          <p>
            Make your next celebration memorable with the warmth,
            elegance and hospitality of Hotel Paradise Palace.
          </p>

          <a href="/contact" className="events-contact-btn">
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}

export default Events;
