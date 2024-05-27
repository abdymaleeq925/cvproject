import React from 'react';

import { Work, Services, Banner, Titles, AboutMeHome, Testimonials } from '../components';

import image989 from '../icons/image 989.svg';
import image900 from '../icons/image 900.svg';
import image2 from '../img/Image (2).svg';
import testimonials from '../icons/testimonials.svg';


const Home = () => {
  return (
    <>
      <Banner title="Hi, I am Abdymalik!" text="a UX Designer with years experience working at Fraxos" boldText="JS FullStack" buttonScroll/>
      <Titles name="work" image={image989}/>
      <Work 
        projects = {[
          {
            title : "Re-Design For The AppMade Easy",
            tags : ["User Research", "UX Design"],
            text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image1 : require("../img/Screen-21 3.svg").default,
            image2 : require("../img/Image.svg").default,
            slug : "appmade-redesign"
          },
          {
            title : "SaaSup Website For Unique Start-Up Brands",
            tags : ["Programming", "MangooDB"],
            text : "It is a long established fact that a reader.",
            image1 : require("../img/Screen-21 3.svg").default,
            image2 : require("../img/Image.svg").default,
            slug : "saasup-website"
          },

        ]}
        />
      <AboutMeHome 
        text="Im a UX Designer, Over the past 10+ years I've created well-crafted mobile and web apps by connecting business goals with user needs. Currently Service and Interaction Designer @Fraxos office. Recently graduated from UC Berkeley, focusing on Interaction Design & Design Emerging Technology.Formerly at Electronic Arts, Apple, Sea Group, Deutsche Bank and JPMorgan Chase & Co." 
        image={image2}
      />
      <Titles name="services" image={image900}/>
      <Services
        items = {[
          {
            icon: require("../img/Icon.svg").default,
            title : "Mobile App",
            text : "It is a long established fact that reader will be distractedthe.",
            fieldText : ["Web and Mobile App Design", "Front-end Development"]
          },
          {
            icon: require("../icons/Design.svg").default,
            title : "UX/UI design",
            text : "lorem ipsum services and any other text that came to my mind furing this project",
            fieldText : ["Web Design and Landing", "Skills on Figma and Adobe"]
          },
          {
            icon: require("../icons/Lunacy.svg").default,
            title : "Motion web design",
            text : "He has excellent communication skills and uses robust workflows.",
            fieldText : ["Python", "Django"]
          },
        ]}
      />
      <Titles name="testimonials" image={testimonials}/>
      <Testimonials
        recommendations = {[
          {
            authorProfile : require("../img/Image (3).svg").default,
            authorName : "Marilyn Monroe",
            authorPosition : "Condent Writer",
            text : "We worked with David designing our backend web app from scratch and we are delighted with the results. He has excellent communication skills and uses robust workflows that allowed me and my team to work with him efficiently."
          },
          {
            authorProfile : require("../icons/profilepic.svg").default,
            authorName : "Zinedine Zidane",
            authorPosition : "Super Mario Boss",
            text : "We worked with David designing our backend web app from scratch and we are delighted with the results. He has excellent communication"
          },
          {
            authorProfile : require("../icons/profilepic2.svg").default,
            authorName : "John Cena",
            authorPosition : "Wrestler",
            text : "We worked with David designing our backend web app from scratch and we are delighted with the results."
          },
        ]}
        />
    </>
  )
}

export default Home
