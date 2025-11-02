import React from "react";
import "./Services.css";
import personalImg from '../../assets/Personal-training.webp'
import nutritionImg from '../../assets/nutrition.png'
import onlineImg from '../../assets/online.png'
import transformationImg from '../../assets/transformation.png'
import groupImg from '../../assets/group.png'
import lifestyleImg from '../../assets/lifestyle.png'

// Simple inline SVG icon helper (you can replace with images or font-icons)
const Icon = ({ children }) => (
  <div className="svc-icon" dangerouslySetInnerHTML={{ __html: children }} />
);

const services = [
  {
    img:personalImg,
    title: "Personal Training",
    desc: "Custom strength & fat-loss programs built for your schedule.",
  },
  {
    title: "Online Coaching",
    desc: "Weekly check-ins, workouts, and nutrition guidance — all online.",
    img:onlineImg,
  },
  {
    title: "Nutrition Plans",
    desc: "Simple, realistic meal plans that fit your life and goals.",
    img:nutritionImg,
  },
  {
    title: "Group Sessions",
    desc: "High-energy group workouts to keep you consistent and motivated.",
    img:groupImg,
  },
  {
    title: "Transformation Program",
    desc: "Structured 12-week program with workouts, nutrition, and coaching.",
    img:transformationImg,
  },
  {
    title: "Lifestyle Coaching",
    desc: "Build routines for better sleep, energy, and long-term results.",
    img:lifestyleImg ,
  }
];

export default function Services() {
  return (
    <section  className="services" id="services">
      <div className="container">
        <header className="svc-header">
          <h4>What I Offer</h4>
          <h2>Professional Services to Transform Your Fitness</h2>
          <p className="svc-intro">
            Choose a program that fits your level — I focus on sustainable results, not quick fixes.
          </p>
        </header>

        <div className="svc-grid">
          {services.map((s, i) => (
            <article className="svc-card" key={i}>
              <img src={s.img} className="svc-img" ></img>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="svc-card-footer">
                <button className="btn-outline">Learn More</button>
                <button className="btn-red"
                
                onClick={() =>
           document.getElementById("subscription").scrollIntoView({behavior:"smooth"})

          }
                
                >Book Now</button>
              </div>
            </article>
          ))}
        </div>

        <div className="svc-cta">
          <p>Ready to get started? I’ll create a custom plan for you.</p>
          <a href="/contact" className="btn-red large">Get Started</a>
        </div>
      </div>
    </section>
  );
}