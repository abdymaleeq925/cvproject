import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import '../styles/header.css';

function Header({scrollUpRef}) {
  const [burgerClick, setBurgerClick] = useState(false);
  const [isRU, setIsRU] = useState(localStorage.getItem("lang") === "ru");

  const { t } = useTranslation();

  useEffect(() => {
    const language = isRU ? "ru" : "en";
    i18next.changeLanguage(language);
    localStorage.setItem("lang", language);
  }, [isRU]);

  return (
    <>
      <header ref={scrollUpRef} className="header">
        <div className="container-xl">
            <div className="header__wrapper">
                <Link to="/" className="header__logo">
                    <p className="logo">CV</p>
                    <p className="header__logo-text">Curriculum Vitae</p>
                </Link>
                <div className="header__navlink">
                    <li><Link to="/"className="header__navlink-text">{t('home')}</Link></li>
                    <li><Link to="/about-me"className="header__navlink-text">{t('aboutme')}</Link></li>
                    <div className="lang" onClick={() => { setIsRU(!isRU); }}
                >
                    <div className="toggle switch-toggles">
                    <p className="lang-text">RU</p>
                    <p className="lang-text">EN</p>
                    <div className="circle toggle-circle"
                         style={{ transform: isRU ? "translateX(1px)" : "translateX(40px)" }}></div>
                    </div>
                </div>
                </div>
                
                <div className="header__cta">
                    <nav className={burgerClick ? "header__cta-burger-menu show-menu" : "header__cta-burger-menu"}>
                        <div className="burger__logo">
                            <p className="logo">CV</p>
                            <p className="burger__logo-title">Curriculum Vitae</p>
                        </div>
                        <ul className="header__cta-burger-menu-links">
                            <li><Link to="/" onClick={() => setBurgerClick(!burgerClick)}>Home</Link></li>
                            <li><Link to="/about-me" onClick={() => setBurgerClick(!burgerClick)}>About Me</Link></li>
                        </ul>
                        <div className="social-media-icons">
                            <Link to="https://www.linkedin.com/in/abdymalik-batyrkulov"><FaLinkedin fill="#242F65" size="24"/></Link>
                            <Link to="https://www.instagram.com/nvintufviv"><FaInstagram fill="#242F65" size="24"/></Link>
                            <Link to="https://github.com/abdymaleeq925"><LuGithub fill="#242F65" size="24"/></Link>
                        </div>
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
    </>
  )
}

export default Header
