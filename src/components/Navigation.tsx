import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';

const navItems: [string, string][] = [
  ['Expertise', 'expertise'],
  ['Skills', 'skills'],
  ['Certifications', 'certifications'],
  ['Education', 'education'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const isScrolled = window.scrollY > navbar.clientHeight;
        setScrolled(isScrolled);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with id "${section}" not found`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}
        elevation={scrolled ? 4 : 0}
        sx={{ zIndex: 9998 }}
      >
        <Toolbar className='navigation-bar'>
          {/* Mobile hamburger menu toggle button (visible ONLY on mobile <= 768px) */}
          <IconButton
            color="inherit"
            aria-label="toggle navigation menu"
            edge="start"
            onClick={toggleMobileMenu}
            className="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          {/* Theme toggle icon */}
          <IconButton
            color="inherit"
            onClick={() => modeChange()}
            aria-label="toggle light or dark theme"
            className="theme-toggle-btn"
          >
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          {/* Desktop Navigation Links (visible ONLY on desktop > 768px) */}
          <Box className="nav-items-desktop">
            {navItems.map(([label, id]) => (
              <Button
                key={label}
                onClick={() => scrollToSection(id)}
                className="nav-link-btn"
              >
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>

        {/* Sleek Mobile Dropdown Menu (visible ONLY on mobile <= 768px when open) */}
        {isMobileMenuOpen && (
          <div className="mobile-dropdown-menu">
            <div className="mobile-dropdown-links">
              {navItems.map(([label, id]) => (
                <button
                  key={label}
                  type="button"
                  className="mobile-dropdown-link"
                  onClick={() => scrollToSection(id)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </AppBar>

      {/* Backdrop overlay to close menu when tapping outside */}
      {isMobileMenuOpen && (
        <div
          className="mobile-dropdown-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </Box>
  );
}

export default Navigation;