import React, { useRef } from 'react';
import {useTranslation} from 'react-i18next';

import { Work, Services, Banner, Titles, AboutMeHome, Testimonials } from '../components';
import { projects, services, testimonials } from '../data/utils';

import image989 from '../icons/image989.svg';
import image900 from '../icons/image900.svg';
import aboutmepic from '../img/aboutmepicture.jpeg';
import testimonialslogo from '../icons/testimonials.svg';

const Home = () => {
  const scrollDownRef = useRef();
  const { t } = useTranslation();
  
  return (
    <>
      <Banner 
        title={t('aboutmeBannerTitle')} 
        text={t('aboutmeBannerText')} 
        boldText={t('aboutmeBannerBold')} 
        buttonScroll 
        scrollDownRef={scrollDownRef}
      />
      <Titles 
        name={t('titleProjects')} 
        image={image989}
      />
      <Work 
        projects = { projects(t) } 
        scrollDownRef = {scrollDownRef}
      />
      <AboutMeHome 
        text={t('aboutmeHome')}
        image={aboutmepic}
      />
      <Titles 
        name={t('tools')} 
        image={image900}
      />
      <Services
        items = { services(t) }
      />
      <Titles 
        name={t('testimonials')} 
        image={testimonialslogo}
      />
      <Testimonials
        recommendations = { testimonials(t) }
      />
    </>
  )
}

export default Home
