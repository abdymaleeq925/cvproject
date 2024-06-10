import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/project-summary.css';

const ProjectSummary = ({summaryText, summaryTags, itemObj}) => {
  return (
    <div>
        <section class="project-summary">
            <div class="container">
                <div class="project-summary__wrapper">
                    <div class="project-summary__info">
                        <h2 class="project-summary__info-title">Project Summary</h2>
                        <p class="project-summary__info-text">{summaryText}</p>
                        <div class="project-summary__info-tags">
                            {
                                summaryTags?.map(tag => (
                                    <div class="project-summary__info-tags-item">{tag}</div>
                                ))
                            }
                        </div>
                    </div>
                    <div class="project-summary__details">
                        <h2 class="project-summary__details-title">Project Details</h2>
                        <div class="project-summary__details-content">
                            {
                                itemObj?.map(item => (
                                    <div className="project-summary__details-content-item">
                                        <h4 class="project-summary__details-content-item-heading">{item.scope}: </h4>
                                        {
                                            item.scope === "Website" ? 
                                            <Link to="/" class="project-summary__details-content-item-link">{item.name}</Link> : 
                                            <p class="project-summary__details-content-item-name">{item.name}</p>
                                        }
                                        
                                    </div>
                                )) 
                            }
                            {/* <h4 class="h4">Duration: </h4>
                            <p class="name">October - December 2022 (6 weeks)</p>
                            
                            <h4 class="h4">Tools: </h4>
                            <p class="name">Figma, Illustration</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProjectSummary
