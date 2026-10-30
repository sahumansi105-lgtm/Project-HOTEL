import React from "react";
import "../Styles/View.css";

function View() {
  const views = [
    {
      id: 1,
      image: "/img1.jpg",
      title: "Golden City Landscape",
      category: "Scenic Beauty",
      description:
        "Discover the beautiful golden architecture and timeless charm of Jaisalmer.",
    },
    {
      id: 2,
      image: "/img2.jpg",
      title: "Glass House View",
      category: "Unique Architecture",
      description:
        "Enjoy a distinctive view of the surroundings through beautiful architectural spaces.",
    },
    {
      id: 3,
      image: "/img03.jpg",
      title: "Jaisalmer Fort View",
      category: "Royal Heritage",
      description:
        "Admire the magnificent golden sandstone architecture of the historic Jaisalmer Fort.",
    },
    {
      id: 4,
      image: "/img04.jpg",
      title: "Magical Sunset",
      category: "Golden Hour",
      description:
        "Watch the sky transform into beautiful shades of gold as the sun sets over Jaisalmer.",
    },
  ];

  return (
    <div className="views-page">

      {/* HERO SECTION */}
      <section className="views-hero">
        <div className="views-hero-content">
          <span>BEAUTY BEYOND THE ORDINARY</span>

          <h1>Discover the Golden Views of Jaisalmer</h1>

          <div className="views-divider"></div>

          <p>
            From magnificent heritage architecture to beautiful
            golden sunsets, experience the unforgettable beauty
            of the Golden City.
          </p>

          <a href="#views-gallery" className="views-hero-btn">
            Explore Gallery
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="views-intro">
        <span>A SIGHT TO REMEMBER</span>

        <h2>Every View Tells a Story</h2>

        <p>
          Experience the charm of Jaisalmer through its golden
          architecture, beautiful surroundings and memorable
          landscapes. Discover the sights that make every visit special.
        </p>
      </section>

      {/* IMAGE GALLERY */}
      <section className="views-gallery-section" id="views-gallery">

        <div className="views-gallery-heading">
          <span>EXPLORE OUR SURROUNDINGS</span>
          <h2>Beautiful Moments, Beautiful Views</h2>
        </div>

        <div className="views-gallery">

          {views.map((view, index) => (
            <article
              className={`view-card view-card-${index + 1}`}
              key={view.id}
            >
              <div className="view-card-image">
                <img src={view.image} alt={view.title} />

                <div className="view-overlay">
                  <span>{view.category}</span>
                  <h3>{view.title}</h3>
                  <p>{view.description}</p>
                </div>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="views-banner">
        <div className="views-banner-content">
          <span>WELCOME TO THE GOLDEN CITY</span>

          <h2>Let the Beauty of Jaisalmer Take Your Breath Away</h2>

          <p>
            Make your stay memorable with the beauty,
            culture and timeless charm of Rajasthan.
          </p>

          <a href="/booking" className="views-banner-btn">
            Book Your Stay
          </a>
        </div>
      </section>

    </div>
  );
}

export default View;