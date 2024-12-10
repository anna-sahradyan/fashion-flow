import React from 'react';
import style from './fashion.module.scss';
import {useMediaQuery} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {Card} from "../card/Card.jsx";
import {catalogBottom} from "../../data/catalog.js";

export const Fashion = () => {
    const isMobile = useMediaQuery('(max-width:320px)');

    return (
        <div className={style.fashionContainer}>
            {isMobile ? (
                <div className={style.mobileLayout}>
                    <div className={style.content}>
                        <img src={isMobile ? '/src/assets/images/pic-1.webp' : '/src/assets/images/big-pic.webp'}
                             alt=""/>
                    </div>
                    <div className={style.mobileSlider}>
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
                            loop={true}
                            navigation={{
                                nextEl: `.${style.btnArrowNext}`,
                                prevEl: `.${style.btnArrowPrev}`,
                            }}
                            modules={[Navigation]}
                        >
                            {catalogBottom?.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className={style.slideShow}>
                                        <Card {...item} />
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className={style.arrowBox}>

                                <div className={style.btnArrowPrev}>
                                    <img src="/src/assets/icons/mob-arrow-next.svg" alt="Previous"/>
                                </div>
                                <div className={style.btnArrowNext}>
                                    <img src="/src/assets/icons/mob-arrow-prev.svg" alt="Next"/>
                                </div>
                            </div>
                        </Swiper>

                    </div>
                </div>
            ) : (
                <div className={style.content}>
                    <div className={style.bigPic}>
                        <img src={isMobile ? '/src/assets/images/pic-1.webp' : '/src/assets/images/big-pic.webp'}
                             alt=""/>
                    </div>
                    <div className={style.smallPic}>
                        <img src={isMobile ? '/src/assets/images/pic-2-big.webp' : '/src/assets/images/pic-2-s.webp'}
                             alt=""/>
                    </div>
                </div>
            )}
        </div>
    );
};
