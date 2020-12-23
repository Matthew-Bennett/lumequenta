import React, { Component } from 'react';
import {Carousel} from "react-bootstrap";
import "./../../../dist/style.css";

class NewsCarousel extends Component {
    render() {
        return (
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://scontent.flhr3-2.fna.fbcdn.net/v/t1.0-9/132180329_10164492936290133_4021013943854117088_o.jpg?_nc_cat=109&ccb=2&_nc_sid=825194&_nc_ohc=0Tuy_1q-HUYAX_f_Jh_&_nc_ht=scontent.flhr3-2.fna&oh=085dca747b6c4d0af6d86b69e6d4b665&oe=60065AD9"
                        alt="Sire Denathrius"
                    />
                    <Carousel.Caption>
                        <h3>Castle Nathria Cleared!</h3>
                        <p>We have successfully cleared Castle Nathria after two weeks of raiding!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default NewsCarousel;