import React from 'react';

import { Titles } from '.';


import MyCVen from "../files/AbdymalikBatyrkulov_CV_en.pdf";
import MyCVru from "../files/AbdymalikBatyrkulov_CV_ru.pdf";
import button from '../img/Button.svg';
import image301 from '../icons/image301.svg';
import '../styles/aboutMeHome.css';
import { useTranslation } from 'react-i18next';

const AboutMeHome = ({text, image}) => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="about-me-home">
         <Titles name={t('aboutme')} image={image301}/>
          <div className="container">
              <div className="about-me-home__wrapper">
                  <p className="about-me-home__text">{text}</p>
                  <div className="about-me-home__picture">
                    <img src={image} alt="profile" className="about-me-home__img"/>
                  </div>
                  <a href={localStorage.getItem("lang") === "ru" ? MyCVru : MyCVen} download={localStorage.getItem("lang") === "ru" ? 'AbdymalikBatyrkulov_CV_ru.pdf' : 'AbdymalikBatyrkulov_CV_en.pdf'} className="img about-me-home__btn"><img src={button} alt="button-resume"/></a>
              </div>
          </div>
      </section>
    </div>
  )
}

export default AboutMeHome
