
import React, { useState } from "react";
import "../Styles/Booking.css";

function Booking() {
  const today = new Date().toLocaleDateString("en-CA");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { checkIn, checkOut } = formData;

    // Validate check-in date
    if (checkIn < today) {
      alert("Check-in date cannot be in the past.");
      return;
    }

    // Validate check-out date
    if (new Date(checkOut) <= new Date(checkIn)) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    // Frontend submission confirmation
    alert("Your booking request has been submitted successfully!");

    // Reset form
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

      <div className="booking-header">
        <h2 className="booking-heading">Book Your Stay</h2>

        <p className="booking-subheading">
          Experience royal hospitality at Hotel Paradise Palace, Jaisalmer.
          Reserve your stay and enjoy an unforgettable experience.
        </p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>

        {/* Guest Name */}
        <div className="booking-field">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="booking-field">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Check-in */}
        <div className="booking-field">
          <label htmlFor="checkIn">Check-in Date</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            min={today}
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
        </div>

        {/* Check-out */}
        <div className="booking-field">
          <label htmlFor="checkOut">Check-out Date</label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            min={formData.checkIn || today}
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
        </div>

        {/* Number of Guests */}
        <div className="booking-field">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="20"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="booking-button">
          Book Now
        </button>

      </form>
    </div>
  );
}

export default Booking;
