import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles/researchInsights.css';

const ResearchInsights = ({ projects }) => {
    const {slug} = useParams();
  return (
    <div>
      <section className="research">
            <div className="container">
                <div className="research__wrapper">
                    <div className="research__heading">
                        <h2 className="research__heading-title">Other Projects</h2>
                    </div> 
                    <Swiper 
                        className='swipe_wrap'
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                        {
                            projects && projects?.map((insight, index) => (
                                slug !== insight.projectSlug &&
                                    <SwiperSlide key={index}>
                                        <Link to={`/projects/${insight.projectSlug}`} className="research__insights-link">
                                            <div className="research__insights-item">
                                                <img src={insight.bannerImage2} alt="insight" className="research__insights-item-img"/>
                                                <h4 className="research__insights-item-title">{insight.bannerTitle}</h4>
                                                <p className="research__insights-item-text">{insight.bannerText}</p>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                            )) 
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ResearchInsights
