import React from 'react';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import MyCVen from "../files/AbdymalikBatyrkulov_CV_en.pdf";
import MyCVru from "../files/AbdymalikBatyrkulov_CV_ru.pdf";
import aboutmephoto from '../img/profilepicture.jpeg';
import hornsign from '../icons/Sign of the Horns.svg';

const AboutMeBanner = () => {
    const { t } = useTranslation();
  return (
    <div>
      <section className="about-me-banner">
            <div className="container-xl">
                <div className="about-me-banner__wrapper">
                    <div className="about-me-banner__profilepic">
                        <img src={aboutmephoto} alt="profilepic" className="about-me-banner__image"/>
                    </div>
                    <div className="about-me-banner__content">
                        <div className="about-me-banner__content-info">
                            <h2 className="about-me-banner__content-info-title">{t('aboutmeBannerTitle')}<img src={hornsign} alt="hornsign"/></h2>
                            <p className="about-me-banner__content-info-text">{t('aboutmeHome')}</p>
                        </div>
                        <div className="about-me-banner__content-btns">
                            <a href={localStorage.getItem("lang") === "ru" ? MyCVru : MyCVen} download={localStorage.getItem("lang") === "ru" ? 'AbdymalikBatyrkulov_CV_ru.pdf' : 'AbdymalikBatyrkulov_CV_en.pdf'} className="btn btn-black">{t('resume')}</a>
                            <Link to="https://www.linkedin.com/in/abdymalik-batyrkulov" className="btn">LinkedIn</Link>
                            <Link to="https://www.instagram.com/nvintufviv" className="btn">Instagram</Link>
                            <Link to="https://github.com/abdymaleeq925" className="btn">GitHub</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutMeBanner
