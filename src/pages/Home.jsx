import React from 'react';

import { Work, Services, Banner, Titles, AboutMeShort, Testimonials } from '../components';

import image989 from '../icons/image 989.svg';
import image900 from '../icons/image 900.svg';
import testimonials from '../icons/testimonials.svg';


const Home = () => {
  return (
    <div>
      <Banner/>
      <Titles name="work" image={image989}/>
      <Work/>
      <AboutMeShort/>
      <Titles name="services" image={image900}/>
      <Services/>
      <Titles name="testimonials" image={testimonials}/>
      <Testimonials/>
    </div>
  )
}

export default Home
