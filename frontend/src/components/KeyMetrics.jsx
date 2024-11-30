import React, { useEffect, useState } from "react";
import { FaUserAlt, FaDownload, FaComments, FaFileAlt, FaStar, FaThumbsUp } from "react-icons/fa";
import "../KeyMetrics.css";

const KeyMetrics = () => {
  const metrics = [
    { id: 1, icon: <FaUserAlt />, label: "Users", value: "2k+" },
    { id: 2, icon: <FaDownload />, label: "Downloads", value: "50k+" },
    { id: 3, icon: <FaComments />, label: "Feedbacks", value: "1k+" },
    { id: 4, icon: <FaFileAlt />, label: "Templates", value: "100+" },
    { id: 5, icon: <FaStar />, label: "Ratings", value: "800+" },
    { id: 6, icon: <FaThumbsUp />, label: "Likes", value: "1.5k+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("keymetrics-visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll(".keymetrics-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div style={{backgroundColor:'#f3f4f6'}}>
    <div id="keymetrics-section" className="keymetrics-container">
      <h2 className="keymetrics-heading ProcessHeading">Our Key <span>Achievements</span></h2>
      <p className="keymetrics-description">
        We’re proud of our journey. Here’s what we’ve accomplished together!
      </p>
      <div className="keymetrics-grid">
        {metrics.map((metric) => (
          <div key={metric.id} className="keymetrics-card">
            <div className="keymetrics-icon">{metric.icon}</div>
            <h3 className="keymetrics-count">{metric.value}</h3>
            <p className="keymetrics-label">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default KeyMetrics;
