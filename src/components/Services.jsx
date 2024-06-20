import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles/services.css';

const Services = ({items}) => {

  return (
    <div>
      <section className="services">
        <div className="container">
            <div className="services__wrapper">
                <Swiper className="services__list"
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    {
                        items?.map((item, index) => (
                            <SwiperSlide key={index} className="services__list-item">
                                <div className="services__list-item-heading">
                                    <img src={item.icon} alt="icon"/>
                                    <p className="services__list-item-heading-title">{item.title}</p>
                                </div>
                                <div className="services__list-item-text">{item.text}</div>
                                <div className="services__list-item-field">
                                    <ul>
                                        {
                                            item?.fieldText?.map((text, index) => (
                                                <p key={index} className="services__list-item-field-text">{text}</p>
                                            ))
                                        }
                                    </ul>
                                </div>
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

export default Services
