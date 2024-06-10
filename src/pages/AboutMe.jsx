import React from 'react'
import AboutMeBanner from '../components/AboutMeBanner'

import '../styles/aboutMeBanner.css';
import EduWork from '../components/EduWork';
import { eduwork, featledge } from '../data/utils';
import Featledge from '../components/Featledge';

const AboutMe = () => {
  return (
    <div>
      <AboutMeBanner/>
      <EduWork eduwork={eduwork}/>
      <Featledge featledge={featledge}/>
    </div>
  )
}

export default AboutMe
