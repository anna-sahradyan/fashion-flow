import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import  style from'./sliderSecond.module.scss';
import 'swiper/css';
import {sliderSecond} from "../../data/slide.js";
import {useMediaQuery} from '@mui/material';
import {Navigation} from "swiper/modules";

export const SliderSecond = () => {
    const isMobile = useMediaQuery('(max-width:320px)');
    return (
        <div className={style.fullscreenSlider}>
            <Swiper
                autoHeight={true}
                spaceBetween={0}
                slidesPerView="auto"
                navigation={{
                    prevEl: `.${style.btnArrowPrev}`,
                    nextEl: `.${style.btnArrowNext}`,
                }}
                modules={[Navigation]}
            >
                {sliderSecond.map((item) => {
                    return (
                        <SwiperSlide key={item.id} className={style.swiperContent}

                        >
                            <div className={style.imgBox}><img
                                src={isMobile? item.is_mob_img : item.img}
                                alt={item.title}
                                className={style.commonImg}
                            /></div>
                            <div className={style.text}>
                                <span className={style.title}>{item.title}</span>
                                <div className={style.textLink}>{item.link}</div>

                            </div>
                        </SwiperSlide>
                    );
                })}
                <div className={style.arrowBox}>
                    <div className={style.btnArrowPrev}><img
                        src={isMobile ? `/src/assets/icons/mob-arrow-next.svg` : `/src/assets/icons/arrow-prev.svg`}
                        alt="arrow-prev" className={''}/></div>
                    <div className={style.btnArrowNext}><img
                        src={isMobile ? `/src/assets/icons/mob-arrow-prev.svg` : `/src/assets/icons/arrow-next.svg`}
                        alt="arrow-next" className={''}/></div>
                </div>
            </Swiper>

        </div>
    );
};

