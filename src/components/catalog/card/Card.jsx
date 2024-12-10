import React from 'react';
import '../catalog.module.scss';
import style from './card.module.scss';

export const Card = (props) => {
    return (
        <div className={style.cardList}>
            <span className={style.picture}> <img src={props.img} alt="picture"/></span>
            <div className={style.cardInner}>
                <div className={style.boxDescribe}>
                    <div className={style.cardDesc}>{props.desc}</div>
                    <div className={style.price}>{props.price}</div>
                </div>

                <img src={props.star} alt="star" className={style.starCard}/>
            </div>
        </div>
    );
};

