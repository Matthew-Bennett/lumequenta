import React, { Component } from 'react';
import BackgroundImage from "./BackgroundImageComponent/BackgroundImage";
import "./../../dist/style.css";


class About extends Component {
    render() {
        return (
            <>
            <BackgroundImage/>
            <h1 className='centered'>Lumé Quenta was formed on Scarshield Legion RPPVP in...</h1>
            </>
        )
    }
}

export default About;