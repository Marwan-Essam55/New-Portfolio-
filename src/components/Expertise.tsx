import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faBrain } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C#",
    "ASP.NET Core",
    "Entity Framework Core",
    "REST APIs",
    "JWT Auth",
    "SQL Server",
    "React",
    "JavaScript",
];

const labelsSecond = [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Git",
    "GitHub",
    "Docker",
    "Postman",
];

const labelsThird = [
    "React Native",
    "Firebase",
    "Cloudinary",
    "HTML5",
    "CSS3",
    "TypeScript",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Backend Architecture &amp; API Development</h3>
                    <p>I design and build scalable backend systems using ASP.NET Core with clean architecture principles, Entity Framework Core for ORM, and secure JWT-based authentication. I specialize in crafting robust RESTful APIs that power full-stack applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>AI Integration &amp; Python Services</h3>
                    <p>I integrate AI models and machine learning capabilities into production systems using Python and FastAPI. From Transformer-based NLP models to cloud-native storage with Cloudinary, I build intelligent backends that process and serve data efficiently.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full-Stack &amp; Mobile Integration</h3>
                    <p>I deliver complete end-to-end solutions by bridging backend APIs with modern React frontends and React Native mobile apps. I leverage Firebase for real-time capabilities, ensuring seamless user experiences across web and mobile platforms.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;