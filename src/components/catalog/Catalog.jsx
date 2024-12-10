import React from 'react';
import {catalog} from "../data/catalog.js";
import {Card} from "./card/Card.jsx";
import style from './catalog.module.scss';
import {useMediaQuery} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";

export const Catalog = () => {
    const isMobile = useMediaQuery('(max-width:320px)');
    return (
        <div className={style.container}>
            {isMobile ? (
                <Swiper
                    spaceBetween={0}
                    slidesPerView="auto"
                    centeredSlides={true}
                    grabCursor={true}
                    loop={true}
                    navigation={{
                        prevEl: `.${style.btnArrowPrev}`,
                        nextEl: `.${style.btnArrowNext}`,

                    }}
                    modules={[Navigation]}
                >
                    {catalog?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Card {...item} />
                        </SwiperSlide>
                    ))}
                    <div className={style.arrowBox}>
                        <div className={style.btnArrowPrev}><img src="/src/assets/icons/mob-arrow-next.svg" alt=""/></div>
                        <div className={style.btnArrowNext}><img src="/src/assets/icons/mob-arrow-prev.svg" alt=""/></div>
                    </div>
                </Swiper>

            ) : (
                <div className={style.cardListBox}>
                    {catalog?.map((item) => (
                        <Card {...item} key={item.id}/>
                    ))}
                </div>
            )}
        </div>

    );
};
