import React from 'react';

import '../styles/researchInsights.css';

const ResearchInsights = ({researchInsights, otherBlocks}) => {
  return (
    <div>
      <section class="research">
            <div class="container">
                <div class="research__wrapper">
                    {
                        researchInsights &&
                        <div class="research__heading">
                            <h2 class="research__heading-title">{researchInsights.title}</h2>
                            <p class="research__heading-text">{researchInsights.text}</p>
                        </div> 
                    }
                    {
                        otherBlocks && otherBlocks?.map(block => (
                            <div class="research__heading">
                                <h2 class="research__heading-title">{block.title}</h2>
                                <p class="research__heading-text">{block.text}</p>
                            </div> 
                        ))
                        
                    }
                    <div class="research__insights">
                            {
                                researchInsights && researchInsights?.insights?.map(insight => (
                                    <div class="research__insights-item">
                                        <img src={insight.image} alt="insight" class="research__insights-item-img"/>
                                        <h4 class="research__insights-item-title">{insight.title}</h4>
                                        <p class="research__insights-item-text">{insight.text}</p>
                                    </div>
                                )) 
                            }
                            {
                                otherBlocks && otherBlocks?.map(block => (
                                    <div class="research__insights-picture">
                                        {
                                            block?.researchPicture.map(image => (
                                                <img src={image} alt="screenshot" class="research__insights-picture-img"/>
                                            ))
                                        }
                                    </div>
                                ))  
                            }
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ResearchInsights
