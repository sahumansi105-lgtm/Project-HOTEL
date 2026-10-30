import React from "react";
import "../Styles/Activities.css";

function Activities() {
  const activities = [
    {
      id: 1,
      title: "Camel Ride",
      image: "/camel ride.jpg",
      category: "Desert Experience",
      description:
        "Experience the timeless charm of the Thar Desert with a peaceful camel ride. Enjoy breathtaking sunset views and discover the beauty of Jaisalmer's golden dunes.",
    },
    {
      id: 2,
      title: "Jeep Adventure",
      image: "/jeep.jpg",
      category: "Adventure",
      description:
        "Feel the thrill of an exciting jeep safari across the golden sand dunes. Explore the desert landscape and create unforgettable memories.",
    },
    {
      id: 3,
      title: "Cultural Dance Nights",
      image: "/dance.jpg",
      category: "Rajasthani Culture",
      description:
        "Enjoy the vibrant culture of Rajasthan with traditional folk performances, lively music and colourful dance under the beautiful desert sky.",
    },
  ];

  return (
    <div className="activities-page">

      {/* HERO SECTION */}
      <section className="activities-hero">
        <div className="activities-hero-content">
          <span className="activities-subtitle">
            DISCOVER THE MAGIC OF RAJASTHAN
          </span>

          <h1>Experiences Beyond Ordinary</h1>

          <div className="activities-divider"></div>

          <p>
            Adventure, culture and unforgettable moments await you
            at Hotel Paradise, Jaisalmer.
          </p>

          <a href="#activities-list" className="activities-hero-btn">
            Explore Activities
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="activities-intro">
        <span>MAKE EVERY MOMENT SPECIAL</span>

        <h2>Discover Experiences to Remember</h2>

        <p>
          From exciting desert adventures to traditional Rajasthani
          celebrations, experience the spirit of Jaisalmer through
          activities that make your stay truly memorable.
        </p>
      </section>

      {/* ACTIVITIES CARDS */}
      <section className="activities-list" id="activities-list">

        {activities.map((activity, index) => (
          <article
            className={`activity-card ${index % 2 !== 0 ? "reverse" : ""}`}
            key={activity.id}
          >
            <div className="activity-image">
              <img src={activity.image} alt={activity.title} />
              <span className="activity-number">
                0{activity.id}
              </span>
            </div>

            <div className="activity-content">
              <span className="activity-category">
                {activity.category}
              </span>

              <h2>{activity.title}</h2>

              <div className="activity-line"></div>

              <p>{activity.description}</p>

              <a href="/contact" className="activity-btn">
                Enquire Now <span>→</span>
              </a>
            </div>
          </article>
        ))}

      </section>

      {/* BOTTOM BANNER */}
      <section className="activities-banner">
        <div className="activities-banner-content">
          <span>YOUR JOURNEY STARTS HERE</span>

          <h2>Create Memories That Last Forever</h2>

          <p>
            Make your Jaisalmer visit special with exciting adventures
            and authentic Rajasthani experiences.
          </p>

          <a href="/booking" className="activities-banner-btn">
            Book Your Stay
          </a>
        </div>
      </section>

    </div>
  );
}

export default Activities;