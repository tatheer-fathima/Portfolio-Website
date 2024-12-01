import React from "react";
import "./ExtraCurr.css";
import { EXTRA_CURRICULARS } from "../../utils/data";

const ExtraCurriculars = () => {
  return (
    <section id="extra-curriculars" className="extra-curriculars-container">
      <h5>Extra Curriculars</h5>
      <div className="extra-curriculars-grid">
        {EXTRA_CURRICULARS.map((activity) => (
          <div key={activity.title} className="extra-curricular-card">
            <img src={activity.image} alt={activity.title} className="project-image" />
            <h6>{activity.title}</h6>
            <p className="extra-curricular-subtitle">{activity.subtitle}</p>
            <p className="extra-curricular-date">{activity.date}</p>
            <p className="extra-curricular-description">{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraCurriculars;
