import React from 'react';
import style from './footer.module.scss';
import {Link} from "react-router-dom";

export const Footer = () => {

    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }, 500);
    };

    return (
        <footer className={style.footer}>
            <div className={style.footerInner}>
                <div className={style.footerTop}>
                    <div className={style.inputPart}>
                        <p className={style.text}>подписка на рассылку и скидка</p>
                        <div className={style.inputWrapper}>
                            <input type="text" id="subscribeInput"/>
                        </div>
                    </div>
                    <ul className={style.help}>
                        <li className={`${style.helpTitle} ${style.title}`}>помощь</li>
                        <li><Link to={'#'} onClick={(e) => e.preventDefault()}>Оплата</Link></li>
                        <li><Link to={'#'} onClick={(e) => e.preventDefault()}>Доставка</Link></li>
                        <li><Link to={'#'} onClick={(e) => e.preventDefault()}>Обмен и возврат</Link></li>
                        <li><Link to={'#'} onClick={(e) => e.preventDefault()}>Подарочные карты</Link></li>

                    </ul>
                    <ul className={style.contacts}>
                        <li className={`${style.contactsTitle} ${style.title}`}>контакты</li>
                        <li><Link to={'#'} onClick={(e) => e.preventDefault()}> Обратная связь</Link></li>
                        <li><Link to={'#'} onClick={(e) => e.preventDefault()}> Контакты</Link></li>
                        <li><Link to={'#'} onClick={(e) => e.preventDefault()}>8(800)250-19-50</Link></li>
                        <li className={style.social}>
                            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="/src/assets/icons/tw.svg" alt="Twitter"/>
                            </Link>
                            <Link to="https://vk.com" target="_blank" rel="noopener noreferrer">
                                <img src="/src/assets/icons/vk.svg" alt="VK"/>
                            </Link>
                            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="/src/assets/icons/inst.svg" alt="Instagram"/>
                            </Link>
                        </li>

                    </ul>
                    <ul className={style.info}>
                        <li className={`${style.infoTitle} ${style.title}`}>информация</li>
                        <li><Link to={'#'} onClick={(e) => e.preventDefault()}>О компании</Link></li>
                        <li><Link to={'#'} onClick={(e) => e.preventDefault()}>Публичная оферта</Link></li>
                        <li><Link to={'#'} onClick={(e) => e.preventDefault()}> Политика конфиденциальности</Link></li>
                        <li><Link to={'#'} onClick={(e) => e.preventDefault()}> Использование файлов cookie</Link></li>


                    </ul>
                </div>

            </div>
            <div className={style.footerBottom}>
                <div className={style.bottomInner}>
                    <div className={style.copyBox}>
                        <span className={style.copy}>
                            <span><img src="/src/assets/icons/copy.svg" alt="" /></span>
                            <span>Annonce</span>
                        </span>
                        <span className={style.footerLegal}>
                            Все права защищены
                        </span>
                    </div>
                    <span className={style.logoName}><img src="/src/assets/icons/logo-footer.svg" alt=""/></span>
                    <span className={style.arrow} onClick={scrollToTop}><img src="/src/assets/icons/arrow-up.svg" alt="arrow-up"/></span>
                </div>
            </div>
        </footer>
    )
        ;
};
