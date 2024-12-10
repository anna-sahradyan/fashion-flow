import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './fullScreenSlider.module.scss';
import 'swiper/css';
import {sliderHeader} from "../data/slide.js";
import {Link} from "react-router-dom";
import {useMediaQuery} from '@mui/material';
import {Navigation} from "swiper/modules";
import style from './fullScreenSlider.module.scss';

export const FullScreenSlider = () => {
    const isMobile = useMediaQuery('(max-width:320px)');
    const isTablet = useMediaQuery('(max-width: 720px)');
    return (
        <div className={style.fullscreenSlider}>
            <Swiper
                spaceBetween={0}
                slidesPerView="auto"
                navigation={{
                    prevEl: `.${style.btnArrowPrev}`,
                    nextEl: `.${style.btnArrowNext}`,
                }}
                modules={[Navigation]}
            >
                {sliderHeader.map((item) => {
                    return (
                        <SwiperSlide key={item.id} className={style.swiperContent}
                        >
                            <div className={style.imgBox}><img
                                src={isTablet ? item.is_mob_img : item.img}
                                alt={item.title}
                                className={style.commonImg}
                            /></div>
                            <div className={style.text}>
                                <span className={style.title}>{item.title}</span>
                                <Link to={'#'} className={style.linkItems}
                                      onClick={(e) => e.preventDefault()}>{item.link_one}</Link>
                                <Link to={'#'} className={style.linkItems}
                                      onClick={(e) => e.preventDefault()}>{item.link_two}</Link>
                            </div>
                        </SwiperSlide>
                    );
                })}
                <div className={style.arrowBox}>
                    <div className={style.btnArrowPrev}><img
                        src={isMobile ? `/src/assets/icons/mob-arrow-next.svg` : `/src/assets/icons/arrow-prev.svg`}
                        alt="arrow-prev" className={''}/></div>
                    <div className= {style.btnArrowNext}>
                        <img
                        src={isMobile ? `/src/assets/icons/mob-arrow-prev.svg` : `/src/assets/icons/arrow-next.svg`}
                        alt="arrow-next" className={''}/></div>
                </div>
            </Swiper>

        </div>
    );
};
