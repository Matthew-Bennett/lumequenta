import React, { Component } from 'react';
import NewsCarousel from "./CarouselComponent/NewsCarousel";
import BackgroundImage from "./BackgroundImageComponent/BackgroundImage";
import "./../../dist/style.css";


class HomePage extends Component {
    render() {
        return (
            <>
                <BackgroundImage/>
                <NewsCarousel/>
            </>
        )
    }
}

export default HomePage;