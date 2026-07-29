import React, { useState } from "react";
import "../Styles/Booking.css";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, checkIn, checkOut, guests } = formData;

    if (name && email && checkIn && checkOut && guests) {
      alert("Booking sent successfully!");
    } else {
      alert("All fields are mandatory!");
    }

    setFormData({
      name: "",
      email: "",
      checkIn: "",
      checkOut: "",
      guests: 1,
    });
  };

  return (
    <div className="booking-section">
      <h2 className="booking-heading">Book Your Stay</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="guests"
          min="1"
          value={formData.guests}
          onChange={handleChange}
          required
        />
        <button type="submit" className="booking-button">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;
