import React from 'react';
import { useParams } from 'react-router-dom';

import { projects } from '../data/utils';
import { Banner, ProjectSummary, ResearchInsights, TeamMembers } from '../components';
import { useTranslation } from 'react-i18next';


const Project = () => {

  const {slug} = useParams();
  const { t } = useTranslation();
  const [project] = projects(t).filter(item => item.projectSlug === slug);

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
      projects = { projects(t) }
      />
    </div>
    
  )
}

export default Project
