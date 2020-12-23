import React, { Component } from 'react';
import BackgroundImage from "./BackgroundImageComponent/BackgroundImage";
import "./../../dist/style.css";


class Forum extends Component {
    render() {
        return (
            <>
                <BackgroundImage/>
                <h1 className='centered'>Forum coming soon!</h1>
            </>
        )
    }
}

export default Forum;