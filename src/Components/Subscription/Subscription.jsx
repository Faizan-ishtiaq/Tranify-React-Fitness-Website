import React, { useState } from "react";
import "./Subscription.css";

export default function Subscription() {
  const [selected, setSelected] = useState("monthly");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // null | "sending" | "ok" | "err"

  function selectMonthly() {
    setSelected("monthly");
  }
  function selectQuarter() {
    setSelected("quarter");
  }
  function selectYearly() {
    setSelected("yearly");
  }

  function submitForm(e) {
    e.preventDefault();
    setStatus(null);
    var re = /^\S+@\S+\.\S+$/;
    if (!re.test(email)) {
      setStatus("err");
      return;
    }
    setStatus("sending");
    setTimeout(function () {
      setStatus("ok");
      setEmail("");
      setTimeout(function () {
        setStatus(null);
      }, 2500);
    }, 700);
  }

  return (
    <section className="simple-subscribe" id="subscription">
      <div className="simple-container">

        <div className="plans-column">
          <h3>Membership Plans</h3>
          <p className="lead">
            Choose a plan. All plans include weekly workouts and progress check-ins.
          </p>

          <div className="plan" data-selected={selected === "monthly"}>
            <div className="plan-top">
              <h4>Monthly</h4>
              <div className="price">₨2,500 <span>/month</span></div>
            </div>
            <ul>
              <li>Personal workouts</li>
              <li>Weekly check-in</li>
              <li>Access to programs</li>
            </ul>
            <button type="button" className="choose" onClick={selectMonthly}>
              {selected === "monthly" ? "Selected" : "Choose Monthly"}
            </button>
          </div>

          <div className="plan" data-selected={selected === "quarter"}>
            <div className="plan-top">
              <h4>3 Months</h4>
              <div className="price">₨6,500 <span>/3 months</span></div>
            </div>
            <ul>
              <li>Everything in monthly</li>
              <li>Diet plan</li>
              <li>Progress tracking</li>
            </ul>
            <button type="button" className="choose" onClick={selectQuarter}>
              {selected === "quarter" ? "Selected" : "Choose 3 Months"}
            </button>
          </div>

          <div className="plan" data-selected={selected === "yearly"}>
            <div className="plan-top">
              <h4>Yearly</h4>
              <div className="price">₨24,000 <span>/year</span></div>
            </div>
            <ul>
              <li>Best value</li>
              <li>Monthly 1:1 call</li>
              <li>Priority support</li>
            </ul>
            <button type="button" className="choose" onClick={selectYearly}>
              {selected === "yearly" ? "Selected" : "Choose Yearly"}
            </button>
          </div>
        </div>

        <div className="form-column">
          <div className="card">
            <h4>Subscribe & Start</h4>
            <p>Selected: <strong>{selected === "monthly" ? "Monthly" : selected === "quarter" ? "3 Months" : "Yearly"}</strong></p>

            <form onSubmit={submitForm} className="sub-form">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={function (e) { setEmail(e.target.value); }}
                required
              />
              <button type="submit" className="btn">
                {status === "sending" ? "Processing..." : "Subscribe"}
              </button>
            </form>

            {status === "err" && <div className="msg error">Enter a valid email.</div>}
            {status === "ok" && <div className="msg success">Thanks — confirmation sent.</div>}

            <p className="note">You can cancel anytime. By subscribing you accept terms.</p>
          </div>
        </div>

      </div>
    </section>
  );
}