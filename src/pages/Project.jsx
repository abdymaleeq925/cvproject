import React from 'react';

import { useParams } from 'react-router-dom';

import { projects } from '../data/utils';
import { Banner, Design, ProjectSummary, ResearchInsights, TeamMembers } from '../components';


const Project = () => {

  const {slug} = useParams();

  const [project] = projects?.filter(item => item.projectSlug === slug);
  console.log(project)

  return (
    <div>
      <Banner
      title={project.bannerTitle}
      backtohome
      bannerImage={project.bannerImage3}
      bannerImage2={project.bannerImage4}
      />
      <ProjectSummary
      summaryText = {project.projectSummaryText}
      summaryTags = {project.projectSummaryTags}
      itemObj = {project.projectSummaryItemObj}
      />
      <TeamMembers 
      members = {project.teamMembers}
      />
      <ResearchInsights 
      researchInsights={project.researchInsights}
      />
      <ResearchInsights 
      otherBlocks={project.otherBlocks}
      />
      <Design 
      designs = {project.design}
      />
    </div>
    
  )
}

export default Project
