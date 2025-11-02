import React from "react";
import "./About.css";
import coachImg from "../../assets/coach.webp"; // replace with your fitness coach image path

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={coachImg} alt="Fitness Coach" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate <span>Fitness Trainer</span> dedicated to helping
            people transform their bodies and build confidence through smart
            training and balanced nutrition. it’s about building discipline, confidence, and lasting strength. With years of hands-on experience,
            I create personalized workout plans that deliver real results.
          </p>

          <p>
            My goal is to make fitness simple, enjoyable, and part of your
            lifestyle — not just a temporary change. Every workout, every rep, and every day moves you closer to your best self. Let's start your journey to
            becoming the best version of yourself.
          </p>

          <button className="about-btn"
          onClick={() =>
           document.getElementById("subscription").scrollIntoView({behavior:"smooth"})

          }
          
          >Start Your Journey</button>
        </div>
      </div>
    </section>
  );
};

export default About;