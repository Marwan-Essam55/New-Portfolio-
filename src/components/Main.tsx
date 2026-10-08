import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import '../assets/styles/Main.scss';

function Main() {
  const textToAnimate = "I am a Full Stack Software Engineer (.NET & React)";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === textToAnimate) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    } else {
      const speed = isDeleting ? 35 : 75;
      timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? textToAnimate.slice(0, prev.length - 1)
            : textToAnimate.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textToAnimate]);
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={require('../assets/images/Marwan_Photo1.png')}
            alt="Marwan Essam"
            className="profile-photo"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Marwan-Essam55" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/marwan-essam55/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>

          <h1 className="hero-title">Marwan Essam</h1>

          <div className="hero-info-wrapper">
            <p className="typewriter-subtitle">
              <span>{displayedText}</span>
              <span className="typewriter-cursor">|</span>
            </p>

            <a
              href="https://drive.google.com/file/d/1clet9y_6vJ_GgyqDCziXRZi4361Rz2o2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-download-btn"
            >
              <FileDownloadIcon className="cv-btn-icon" />
              Download CV
            </a>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/Marwan-Essam55" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/marwan-essam55/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
