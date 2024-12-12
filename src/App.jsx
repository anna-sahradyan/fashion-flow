import React from 'react';
import {FullScreenSlider} from "./components/slider/FullScreenSlider.jsx";
import {Header} from "./components/header/Header.jsx";
import {Footer} from "./components/footer/Footer.jsx";
import {Catalog} from "./components/catalog/Catalog.jsx";
import {SliderSecond} from "./components/slider/sliderSecond/SliderSecond.jsx";
import {Fashion} from "./components/catalog/fashion/Fashion.jsx";

export const App = () => {
    return (
        <>
            <Header/>
            <div className="wrapper">
                <main className={'main'}>
                    <FullScreenSlider/>
                    <Catalog/>
                    <SliderSecond/>
                    <Fashion/>
                </main>
            </div>
            <Footer/>
        </>
    );
};
