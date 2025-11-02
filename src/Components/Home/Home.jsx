import React from "react";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h4 className="tagline">Transform Your Body. Transform Your Life.</h4>
        <h1 className="main-heading">
          Get Fit, Stay Strong <br /> Your Transformation Starts Today!
        </h1>
        <p className="description">
          I’m a certified personal trainer helping people build strength, lose fat, 
          and gain confidence.Discover a fitness journey built around your lifestyle with personalized workouts,powerful mindset coaching,and results that stay.Whether you're just starting out or leveling up,we'll help you unlock your best version. Join me and reach your best version — physically and mentally.
        </p>
        <div className="buttons">
          <button className="btn-primary" onClick={() =>
           document.getElementById("subscription").scrollIntoView({behavior:"smooth"})

          }
          >Start Training</button>
          <button className="btn-secondary"
          onClick={() =>
           document.getElementById("about").scrollIntoView({behavior:"smooth"})

          }
          
          >Learn More</button>
        </div>
      </div>

      <div className="home-image">
        <img
          src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80"
          alt="Fitness Training"
        />
      </div>
    </section>
  );
}

export default Home;