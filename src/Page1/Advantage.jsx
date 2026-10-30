import React from "react";
import "../Styles/Advantage.css";

function Advantage() {
  const advantages = [
    {
      id: 1,
      title: "Heritage & Royal Architecture",
      image: "/a01.jpg",
      category: "A Royal Experience",
      description:
        "Discover the timeless beauty of Jaisalmer through traditional architecture, golden sandstone surroundings and the charm of Rajasthan's rich heritage.",
    },
    {
      id: 2,
      title: "Rooftop Views of Jaisalmer Fort",
      image: "/a02.jpg",
      category: "Unforgettable Views",
      description:
        "Enjoy beautiful views of the magnificent Jaisalmer Fort from the rooftop. Experience the golden city from a special perspective.",
    },
    {
      id: 3,
      title: "Comfort & Luxury Facilities",
      image: "/a03.jpg",
      category: "Relax in Comfort",
      description:
        "Enjoy a comfortable and welcoming stay with thoughtfully designed spaces and warm hospitality throughout your visit.",
    },
  ];

  return (
    <div className="advantage-page">

      {/* HERO SECTION */}
      <section className="advantage-hero">
        <div className="advantage-hero-content">
          <span>THE DIFFERENCE OF PARADISE</span>

          <h1>Experience the Royal Side of Jaisalmer</h1>

          <div className="advantage-divider"></div>

          <p>
            Discover a perfect blend of heritage, comfort and
            unforgettable views in the heart of the Golden City.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="advantage-intro">
        <span>WHY CHOOSE HOTEL PARADISE?</span>

        <h2>More Than Just a Stay</h2>

        <p>
          Experience the beauty of Rajasthan with warm hospitality,
          memorable surroundings and the comfort you deserve.
          Every detail makes your Jaisalmer journey special.
        </p>
      </section>

      {/* ADVANTAGE CARDS */}
      <section className="advantage-list">

        {advantages.map((item, index) => (
          <article
            className={`advantage-card ${index % 2 !== 0 ? "reverse" : ""}`}
            key={item.id}
          >
            <div className="advantage-image">
              <img src={item.image} alt={item.title} />
              <span className="advantage-number">
                0{item.id}
              </span>
            </div>

            <div className="advantage-content">
              <span className="advantage-category">
                {item.category}
              </span>

              <h2>{item.title}</h2>

              <div className="advantage-line"></div>

              <p>{item.description}</p>

              <a href="/contact" className="advantage-btn">
                Know More <span>→</span>
              </a>
            </div>
          </article>
        ))}

      </section>

      {/* FINAL BANNER */}
      <section className="advantage-banner">
        <div className="advantage-banner-content">
          <span>YOUR GOLDEN CITY ESCAPE</span>

          <h2>Make Your Stay Truly Special</h2>

          <p>
            Experience the warmth of Rajasthani hospitality
            and create beautiful memories in Jaisalmer.
          </p>

          <a href="/booking" className="advantage-banner-btn">
            Book Your Stay
          </a>
        </div>
      </section>

    </div>
  );
}

export default Advantage;