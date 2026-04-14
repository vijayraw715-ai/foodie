import React, { useState } from "react";
import "../../public/style/style.css";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your reservation for ${formData.guests} guest(s) on ${formData.date} at ${formData.time} is confirmed.`);
    setFormData({ name: "", email: "", date: "", time: "", guests: 1 });
  };

  return (
    <div className="reservation-page container">
      <h1>Reserve a Table</h1>
      <p>Fill out the form below to book your table with us.</p>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Number of Guests:
          <input
            type="number"
            name="guests"
            value={formData.guests}
            min="1"
            max="20"
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Reserve Now</button>
      </form>
    </div>
  );
};

export default Reservation;