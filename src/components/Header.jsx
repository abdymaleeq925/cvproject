import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../icons/header_logo.svg';

function Header() {
  const [burgerClick, setBurgerClick] = useState(false);

  return (
    <div>
      <header className="header">
        <div className="container-xl">
            <div className="header__wrapper">
                <Link to="/" className="header__logo">
                    <img className="logo" src={logo} alt="logo"/>
                    <p className="header__logo-text">Curriculum Vitae</p>
                </Link>
                <div className="header__navlink">
                    <li><Link to="/"className="header__navlink-text">Home</Link></li>
                    <li><Link to="/about-me"className="header__navlink-text">About Me</Link></li>
                    <li><Link to="/projects"className="header__navlink-text">Projects</Link></li>
                    <li><Link to="/licenses"className="header__navlink-text">Licenses</Link></li>
                </div>
                <div className="header__cta">
                    <nav className={burgerClick ? "header__cta-burger-menu show-menu" : "header__cta-burger-menu"}>
                        <ul className="header__cta-burger-menu-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-me">About Me</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/licenses">Licenses</Link></li>
                        </ul>
                    </nav>
                    <div className={burgerClick ? "header__cta-burger close-burger" : "header__cta-burger"} onClick={() => setBurgerClick(!burgerClick)}>
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                </div>
            </div>
        </div>
      </header>
      <div className="go-to-up">
          <svg xmlns="http://www.w3.org/2000/svg" height="30" width="22.5" viewBox="0 0 384 512">
            <path fill="#242f65" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
          </svg>
      </div>
    </div>
  )
}

export default Header