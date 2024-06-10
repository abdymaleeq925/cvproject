import React from 'react';

import '../styles/design.css';

const Design = ({designs}) => {
  return (
    <div>
      <section class="design">
            <div class="container">
                <div class="design__wrapper">
                    {
                        designs?.map(design => (
                            <div className="design__list">
                                <div class="design__list-heading">
                                    <h2 class="design__list-heading-title">{design.designHeadingTitle}</h2>
                                    <p class="design__list-heading-text">{design.designHeadingText}</p>
                                </div>
                                <div class="design__list-images">
                                    {
                                        design?.designImages?.map(image => (
                                            <div class="design__list-images-item">
                                                <img src={image.image} alt="" class="design__list-images-item-img"/>
                                                <h4 class="design__list-images-item-text">{image.text}</h4>
                                        </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </div>
  )
}

export default Design
