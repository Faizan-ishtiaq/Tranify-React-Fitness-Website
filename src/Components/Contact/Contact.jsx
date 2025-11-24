import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState(null); // null | "sending" | "success"
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // fake send (replace with real API later)
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus(null), 3500);
    }, 900);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrap container">

        {/* LEFT: text / info */}
        <div className="contact-left">
          <h4 className="accent">Get in touch</h4>
          <h2>Start your fitness journey today</h2>
          <p className="lead">
            Have questions or want a custom plan? Fill the form and I’ll reply within 24 hours.
            I offer personalized training, online coaching and nutrition plans — let’s make a plan that fits your life.
          </p>

          <div className="quick-info">
            <div><strong>Email:</strong> <a href="mailto:faizanishtiaqwork@gmail.com">faizanishtiaqwork@gmail.com</a></div>
            <div><strong>Phone:</strong> <a href="tel:+923001234567">+92 300 1234567</a></div>
            <div><strong>Hours:</strong> Mon–Fri 07:00–20:00</div>
          </div>

          <div className="small-cta">
            <button className="btn-red" onClick={() => {
              document.querySelector(".contact-form")?.scrollIntoView({ behavior: "smooth" });
            }}>Book a Free Call</button>
          </div>
        </div>

        {/* RIGHT: form */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                aria-label="Your name"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                aria-label="Your email"
              />
            </div>

            <div className="row">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone (optional)"
                aria-label="Phone"
              />
              <select name="service" defaultValue="Personal Training" aria-label="Service">
                <option>Personal Training</option>
                <option>Online Coaching</option>
                <option>Nutrition Plan</option>
                <option>Group Sessions</option>
              </select>
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your goals..."
              rows="4"
              required
              aria-label="Message"
            />

            <div className="form-actions">
              <button type="submit" className="btn-red">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              <button type="button" className="btn-outline" onClick={() => setForm({ name: "", email: "", phone: "", message: "" })}>
                Reset
              </button>
            </div>

            {status === "success" && <div className="success">Thanks — I received your message and will reply soon.</div>}
          </form>
        </div>

      </div>
    </section>
  );
}