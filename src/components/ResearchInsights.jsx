import React from 'react';

import '../styles/researchInsights.css';

const ResearchInsights = ({headingTitle, headingText, insights, picture}) => {
  return (
    <div>
      <section class="research">
            <div class="container">
                <div class="research__wrapper">
                    <div class="research__heading">
                        <h2 class="research__heading-title">{headingTitle}</h2>
                        <p class="research__heading-text">{headingText}</p>
                    </div>
                    <div class="research__insights">
                        {
                            insights && insights?.map(insight => (
                                <div class="research__insights-item">
                                    <img src={insight.image} alt="insight" class="research__insights-item-img"/>
                                    <h4 class="research__insights-item-title">{insight.title}</h4>
                                    <p class="research__insights-item-text">{insight.text}</p>
                                </div>
                            ))
                        }
                        {
                            picture && 
                            <div class="research__insights-picture">
                                <img src={picture} alt="screenshot" class="research__insights-picture-img"/>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ResearchInsights
