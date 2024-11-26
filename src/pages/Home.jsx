import React, {useRef} from 'react';

import { Work, Services, Banner, Titles, AboutMeHome, Testimonials } from '../components';

import { projects, services, testimonials } from '../data/utils';

import image989 from '../icons/image989.svg';
import image900 from '../icons/image900.svg';
import aboutmepic from '../img/aboutmepicture.jpeg';
import testimonialslogo from '../icons/testimonials.svg';

const Home = () => {
  const scrollDownRef = useRef();
  
  return (
    <>
      <Banner title="Hi, I am Abdymalik!" text="graduate with a few showcase projects" boldText="JS FullStack" buttonScroll scrollDownRef={scrollDownRef}/>
      <Titles name="work" image={image989}/>
      <Work projects = { projects } scrollDownRef = {scrollDownRef}/>
      <AboutMeHome 
        text="I am a JS FullStack graduate from ITC BootCamp in Almaty. I've been an intern at Dara Solutions for 4 months. 
        I've also created various Telegram bots and well-designed web-pages that are including HTML/CSS, React, NodeJS, MangooDB 
        and several APIs. I am patient, diligent, good executor, and I can contribute well in teamwork. I want keep going 
        learning programming on a working basis and have an opportunity to contribute my knowledge and effort." 
        image={aboutmepic}
      />
      <Titles name="services" image={image900}/>
      <Services
        items = { services }
      />
      <Titles name="testimonials" image={testimonialslogo}/>
      <Testimonials
        recommendations = { testimonials }
        />
    </>
  )
}

export default Home
