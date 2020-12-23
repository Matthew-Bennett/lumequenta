import React, { Component } from 'react';
import BackgroundImage from "./BackgroundImageComponent/BackgroundImage";
import "./../../dist/style.css";


class Contact extends Component {
    render() {
        return (
            <>
                <BackgroundImage/>
                <h1 className='centered'>Please whisper Esgarath, Deathmire, Karébear or Oomykins for a chat!</h1>
            </>
        )
    }
}

export default Contact;