import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
function Timeline() {
  return (
    <div id="certifications">
      <div className="items-container">
        <h1>Certifications &amp; Training</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">Digital Egypt Pioneers Initiative (DEPI)</h3>
            <h4 className="vertical-timeline-element-subtitle">Full Stack .NET Developer Trainee</h4>
            <p>
              Intensive training program covering full-stack development using ASP.NET Core, Entity Framework, and modern software engineering practices.
            </p>
            <div className="cert-image-wrapper">
            <img src={require('../assets/images/cert_1.png')} alt="DEPI Certificate" className="cert-image" />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer Program</h3>
            <h4 className="vertical-timeline-element-subtitle">National Telecommunication Institute</h4>
            <p>
              Web Designer Program at the National Telecommunication Institute (NTI) as part of the Digital Egypt Youth (DEY) initiative.
            </p>
            <div className="cert-image-wrapper">
             <img src={require('../assets/images/cert_2.png')} alt="DEPI Certificate" className="cert-image" />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analysis in Excel</h3>
            <h4 className="vertical-timeline-element-subtitle">DataCamp</h4>
            <p>
              This course provided me with a strong foundation in using Excel for data analysis and enhanced my ability to work with data efficiently and professionally.
            </p>
            <div className="cert-image-wrapper">
              <img src={require('../assets/images/cert_3.png')} alt="Web Designer .NET Certificate" className="cert-image" />
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCertificate} />}
          >
            <h3 className="vertical-timeline-element-title">Advanced Programming & Web Development Program</h3>
            <h4 className="vertical-timeline-element-subtitle">Amideast/Egypt</h4>
            <p>
              In recognition of participation in the 2024 STEM Plus Advanced Programming & Web
              Development Program (48hrs) sponsored by BOEING and run by Amideast/Egypt
            </p>
            <div className="cert-image-wrapper">
              <img src={require('../assets/images/cert_4.jpg')} alt="AMIDEAST Certificate" className="cert-image" />
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;