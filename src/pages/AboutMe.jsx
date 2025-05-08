import React from 'react'
import AboutMeBanner from '../components/AboutMeBanner'

import '../styles/aboutMeBanner.css';
import EduWork from '../components/EduWork';
import { eduwork } from '../data/utils';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div>
      <AboutMeBanner />
      <EduWork eduwork={eduwork(t)}/>
    </div>
  )
}

export default AboutMe
