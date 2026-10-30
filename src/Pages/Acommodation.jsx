import React from 'react'
import "../Styles/Acommodation.css"
import { Link } from "react-router-dom";

function Acommodation() {
  const rooms = [
    {
      id: 1,
      type: "🏘️ Deluxe Room",
      image: "/room10.jpg",
      description: "Spacious and comfortable room with modern amenities, perfect for a relaxing stay.",
      price: "₹3,500",
      features: ["King Size Bed", "City View", "Free WiFi", "AC", "TV"]
    },
    {
      id: 2,
      type: "👸 Maharani Suite",
      image: "/room02.jpg",
      description: "A luxurious retreat with rich fabrics and traditional décor, ideal for couples seeking a serene and regal stay..",
      price: "₹6,500",
      features: ["Separate Living Area", "Balcony", "Mini Bar", "Free WiFi", "AC", "TV"]
    },
    {
      id: 3,
      type: "👨‍👩‍👧‍👦 Family Room",
      image: "/room03.jpg",
      description: "Perfect for families with extra space and multiple beds, ensuring comfort for everyone.",
      price: "₹5,000",
      features: ["2 Double Beds", "Extra Space", "Free WiFi", "AC", "TV", "Play Area"]
    },
    {
      id: 4,
      type: "🏰 Maharaja Suite",
      image: "/room04.jpg",
      description: "Experience the grandeur of Rajasthan in the Maharaja Suite, with hand-carved interiors and royal elegance overlooking the golden landscapes of Jaisalmer..",
      price: "₹12,000",
      features: ["Private Garden", "Jacuzzi", "Kitchen", "Free WiFi", "AC", "Premium Amenities"]
    },
    {
      id: 5,
      type: "🕌 Jaisalmer Royal Suite",
      image: "/room06.jpg",
      description: "Inspired by the majestic Sonar Fort, this suite blends heritage charm with modern comfort for an unforgettable desert experience.",
      price: "₹12,000",
      features: ["Private Garden", "Jacuzzi", "Kitchen", "Free WiFi", "AC", "Premium Amenities"]
    },
    {
      id: 6,
      type: "🏯 Fort View Heritage Room",
      image: "/room07.jpg",
      description: "Wake up to breathtaking views of Jaisalmer Fort in a room that perfectly combines history and comfort.",
      price: "₹12,000",
      features: ["Private Garden", "Jacuzzi", "Kitchen", "Free WiFi", "AC", "Premium Amenities"]
    },
    {
      id: 7,
      type: "🛏️ Golden Palace Suitee",
      image: "/room08.jpg",
      description: "Luxury inspired by Rajasthan’s palaces, featuring elegant arches, silk drapes, and handcrafted details for a royal escape.",
      price: "₹12,000",
      features: ["Private Garden", "Jacuzzi", "Kitchen", "Free WiFi", "AC", "Premium Amenities"]
    },
    {
      id: 8,
      type: "🌅 Palace Balcony Suite",
      image: "/room09.jpg",
      description: "Relax on your private balcony with sweeping desert and fort views, wrapped in royal décor.",
      price: "₹12,000",
      features: ["Private Garden", "Jacuzzi", "Kitchen", "Free WiFi", "AC", "Premium Amenities"]
    }
  ];

  return (
    <div className="accommodation-page">
      <div className="accommodation-header">
        <h1>Our Accommodations</h1>
        <p>Choose from our variety of luxurious rooms and suites designed for your comfort</p>
      </div>

      <div className="rooms-container">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <div className="room-image">
              <img src={room.image} alt={room.type} />
              <div className="room-price">{room.price}/night</div>
            </div>
            <div className="room-content">
              <h2>{room.type}</h2>
              <p className="room-description">{room.description}</p>
              <div className="room-features">
                {room.features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
              <Link to="/booking" className="book-btn">
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Acommodation
