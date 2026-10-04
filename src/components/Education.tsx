import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Education.scss';

function Education() {
  return (
    <div className="education-container" id="education">
      <div className="items-container">
        <h1>Education</h1>
        <div className="education-card-wrapper">
          <div className="education-card">
            {/* Accent bar */}
            <div className="education-card__accent" />

            <div className="education-card__icon-col">
              <div className="education-card__icon-ring">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
            </div>

            <div className="education-card__body">
              <span className="education-card__badge">Bachelor's Degree</span>
              <h2 className="education-card__degree">
                B.Sc. in Computer Science
              </h2>
              <h3 className="education-card__institution">
                Faculty of Science, Cairo University
              </h3>
              <div className="education-card__meta">
                <span className="education-card__timeline">
                  📅&nbsp; September 2022 – June 2026
                </span>
                <span className="education-card__location">
                  📍&nbsp; Giza, Egypt
                </span>
              </div>
              <p className="education-card__desc">
                Studying core computer science fundamentals including data structures, algorithms, software engineering, databases, and artificial intelligence — with a strong focus on applied full-stack development throughout the programme.
              </p>
              <div className="education-card__skills">
                {[
                  "Data Structures",
                  "Algorithms",
                  "Software Engineering",
                  "Databases",
                  "AI Fundamentals",
                  "OOP",
                ].map((tag, i) => (
                  <span key={i} className="education-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
