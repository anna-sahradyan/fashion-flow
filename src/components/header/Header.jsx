import React, {useState} from 'react';
import style from './header.module.scss';
import {Link} from "react-router-dom";
import {list} from "../data/list.js";
import {Divider, useMediaQuery} from "@mui/material";

export const Header = () => {
    const isTablet = useMediaQuery('(max-width: 320px)');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);

    };
    return (
        <header className={style.header}>
            <div className={style.headerInner}>
                <div className={style.logo}>
                    <button onClick={toggleMenu}><img src="/src/assets/icons/menu.svg"
                                                      alt="menu"
                                                      className={style.menuLogoBtn}/></button>
                    <img
                        src="/src/assets/icons/logo-header.svg" alt="logo" className={style.logoAnnonce}/></div>
                <div className={style.actions}>
                    <span><img src="/src/assets/icons/search.svg" alt="search"/></span>
                    <span><img src="/src/assets/icons/user.svg" alt="search"/></span>
                    <span><img src="/src/assets/icons/bag.svg" alt="search"/></span>
                    <span><img src="/src/assets/icons/star.svg" alt="star"/></span>
                </div>
                <div className={`${style.sideMenu} ${isMenuOpen ? style.active : ''}`} id="side-menu">

                    <nav>
                        <div className={style.sideInner}>
                            <div className={style.sideHeader}>
                            <span><button id="close-menu" onClick={toggleMenu}><img
                                src="/src/assets/icons/close.svg" alt="" className={style.closeBtn}/></button></span>
                                <span><img src="/src/assets/icons/logo-annonce.svg" alt=""
                                           className={style.navLogo}/></span>

                            </div>
                            <div className={style.menuList}>
                                <ul>
                                    {list.map((item) => (
                                        <li key={item.id} onClick={(e) => e.preventDefault()}
                                            className={style.listItem}>
                                            <Link to={item.link}>{item.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                            <div className={style.btnContainer}>
                                <button className={style.btnDark} type={'button'}>смотреть все</button>
                                <button className={style.btnLight} type={'button'}>GIFT CARD/подарочная карта</button>
                            </div>
                        </div>
                    </nav>
                    <div className={`${isTablet ? style.hidden : style.logoMenuBottomText}`}>

                        <p className={style.menuLogoName}>Annonce</p>
                        <p className={style.menuLegal}>Все права защищены</p>
                    </div>
                    {isTablet && (
                        <>

                            <div className={style.personalAccount}>
                                <Divider sx={{backgroundColor: ' var( --grey-550)', height: "0.5px"}}/>
                                <div className={style.personalAccountInner}>
                                <span className={style.personalAccountImg}><img src="/src/assets/icons/user.svg"
                                                                                alt=""/>
                                личный кабинет</span>
                                    <span>чат</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>

            </div>
        </header>
    )
        ;
};

