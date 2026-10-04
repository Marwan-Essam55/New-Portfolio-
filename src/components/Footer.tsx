import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Marwan-Essam55" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:marawan.elbob@gmail.com" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>Designed &amp; Built by <a href="https://github.com/Marwan-Essam55" target="_blank" rel="noreferrer">Marwan Essam</a></p>
    </footer>
  );
}

export default Footer;