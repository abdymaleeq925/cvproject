import React from 'react';

import { Banner, Design, ProjectSummary, ResearchInsights, TeamMembers } from '../components';

import photo from '../img/Photo.png';
import photo2 from '../img/Homepage.png';

const Project = () => {
  return (
    <div>
      <Banner
      title="Saasup website for unique start-up brand"
      backtohome
      bannerImage={photo}
      bannerImage2={photo2}
      />
      <ProjectSummary
      summaryText = "Social media often feeds into the discovery of new content such as news stories, and “discovery” is a search activity. Many people also perform searches at social media sites to find social media content For instance, Twitter is a social site to share short messages Social connections may also impact the relevancy of some search results, either within a social media network or at a 'mainstream' search engine. Social media itself is a catch-all term for sites that may provide radically different social actions."
      summaryTags = {["Designer", "Developer", "Illustration & Brand", "Creative", "Website"]}
      itemObj = {
       [ 
        {scope: "Role", name : "Design Lead"},
        {scope: "Duration", name : "October - December 2022 (6 weeks)"},
        {scope: "Website", name : "Visit webite"},
        {scope: "Tools", name : "Figma, Illustration"}
       ]
      }
      />
      <TeamMembers 
      members = {
        [
          {photo : require("../img/member.jpg").default,
          name : "Sylverster Stallone",
          position : "Designer"},
          {photo : require("../img/member.jpg").default,
          name : "Michael Jackson",
          position : "Director"}
        ]
      }
      />
      <ResearchInsights 
      headingTitle = "Research Insights"
      headingText = "Conversations and sketches by participants in eight living environments highlighted an opportunity for reimagining location sharing for more intimate spaces."
      insights = {
        [
          {image: "../img/rainbow.png", title: "Color", text : "Lorem Ipsum is simply printing industry's standard dummy text ever unknown printer."},
          {image: "../img/rainbow.png", title: "Image Choose", text : "Lorem Ipsum is simply printing industry's standard dummy text ever unknown printer."},
          {image: "../img/rainbow.png", title: "Typography & Spacing", text : "Lorem Ipsum is simply printing industry's standard dummy text ever unknown printer."}
        ]
      }
      />
      <ResearchInsights 
      headingTitle = "User Flow"
      headingText = "Lorem Ipsum is simply dummy text of the printing and. Lorem Ipsum has been the industry's standard dummy text ever unknown printer took a galley of type and scrambled it to type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
      picture = "../img/Flow Digram.png"
      />
      <Design 
      designs = {
      [
        {
          headingTitle : "Design System and Style",
          headingText : "We created a design system that would not only build the consistency but also save time for the client as they build new features. This will improve the overall process and experience for the website.",
          images : [{image: "../img/1.png"},
                   {image: "../img/2.png"}]
        },
        {
          headingTitle : "Demos And Pages",
          headingText : "Lorem Ipsum is simply dummy text of the printing and. Lorem Ipsum has been the industry's standard dummy text ever unknown printer took a galley of type and scrambled it to type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
          images : [{image: "../img/1.png", text: "Colors"},
                   {image: "../img/2.png", text: "Buttons"}]
        },
      ]
      }
      />
    </div>
    
  )
}

export default Project
