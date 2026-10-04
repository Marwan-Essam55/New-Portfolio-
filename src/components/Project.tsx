import React from "react";
import mock01 from '../assets/images/Project_1.png';
import mock02 from '../assets/images/Project_2.png';
import mock03 from '../assets/images/Project_3.png';
import mock04 from '../assets/images/Project_4.png';
import mock05 from '../assets/images/Project_5.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://edu-modern-alpha.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={mock01} className="zoom" alt="EduModern thumbnail" width="100%"/>
                </a>
                <h2>EduModern</h2>
                <a href="https://github.com/Marwan-Essam55/EduModern" target="_blank" rel="noreferrer" style={{textDecoration: 'underline'}}>
                    Github Repository
                </a>

                <p>EduModern is an AI-powered full-stack educational platform built with ASP.NET Core Web API and React. It features real-time AI assistance powered by the Gemini API, downloadable smart synchronized notes, and secure role-based access control (RBAC) using ASP.NET Core Identity and JWT authentication, all designed around a clean layered architecture.</p>
                <div className="project-tags">
                    {["ASP.NET Core", "React", "EF Core", "JWT", "SQL Server"].map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                    ))}
                </div>
            </div>

            <div className="project">
                <a href="https://trivex-software.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={mock02} className="zoom" alt="TriVex thumbnail" width="100%"/>
                </a>
                <h2>TriVex <span className="project-badge">Graduation Project</span></h2>
                <a href="https://github.com/Marwan-Essam55/Trivex-Software" target="_blank" rel="noreferrer" style={{textDecoration: 'underline'}}>
                    Github Repository
                </a>
                <p>Developed using AI models and Transformers for intelligent processing, with a FastAPI backend infrastructure, Cloudinary for cloud storage,TriVex provides an enterprise platform for researchers and analysts to decode human micro-expressions, vocal intonations, and kinematic posture with multimodal AI, and PostgreSQL databases. Delivers AI-powered insights through a modern React frontend.</p>
                <div className="project-tags">
                    {["Python", "FastAPI", "Transformers", "PostgreSQL", "Cloudinary", "React"].map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                    ))}
                </div>
            </div>

            <div className="project">
                <a href="https://marwan-essam55.github.io/Merto/" target="_blank" rel="noreferrer">
                    <img src={mock03} className="zoom" alt="Metro thumbnail" width="100%"/>
                </a>
                <h2>Metro</h2>
                <a href="https://github.com/Marwan-Essam55/Merto" target="_blank" rel="noreferrer">
                    Github Repository
                </a>
                <p>A responsive e-commerce frontend UI cloned from the popular Merto shopping theme. Built using HTML5, CSS3, and JavaScript, featuring a modern hero slider, promo banners, and feature highlight sections.</p>
                <div className="project-tags">
                    {["HTML5", "CSS3", "JavaScript", "Responsive Design"].map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                    ))}
                </div>
            </div>



            <div className="project">
                <a href="https://marwan-essam55.github.io/AXIT-template-/" target="_blank" rel="noreferrer">
                    <img src={mock04} className="zoom" alt="AXIT template thumbnail" width="100%"/>
                </a>
                <h2>AXIT template</h2>
                <a href="https://github.com/Marwan-Essam55/AXIT-template-" target="_blank" rel="noreferrer">
                    Github Repository
                </a>
                <p>A responsive frontend project developed with HTML, CSS, and vanilla JavaScript. Optimized for clean UI design, performance, and accessibility across all devices. Showcases a modern café brand with smooth animations and intuitive navigation.</p>
                <div className="project-tags">
                    {["HTML5", "CSS3", "JavaScript", "Responsive Design"].map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                    ))}
                </div>
            </div>
            
            <div className="project">
                <a href="https://marwan-essam55.github.io/luxestate/" target="_blank" rel="noreferrer">
                    <img src={mock05} className="zoom" alt="luxestate thumbnail" width="100%"/>
                </a>
                <h2>luxestate</h2>
                <a href="https://github.com/Marwan-Essam55/luxestate" target="_blank" rel="noreferrer">
                    Github Repository
                </a>
                <p>A responsive real estate landing page UI cloned from a premium theme. Built using HTML5, CSS3, and vanilla JavaScript, featuring a floating navigation bar, smooth scroll animations, and a modern property showcase layout.</p>
                <div className="project-tags">
                    {["HTML5", "CSS3", "JavaScript", "Responsive Design"].map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;