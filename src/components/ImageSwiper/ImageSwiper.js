import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../images/0.jpg'
import image3 from '../../images//banner kkhuyen mai.jpg'

import './ImageSwiper.scss'
export default class ImageSwiper extends Component {
    render() {
        return (
            <Carousel showThumbs = {false} emulateTouch = {true} autoPlay = {true} infiniteLoop= {true} dynamicHeight showArrows={false}>
                <div>
                    <img src={image1} alt=""/>
                </div>
                <div>
                    <img src={image1} alt=""/>
                </div>
                <div>
                    <img src={image3} alt=""/>
                </div>
            </Carousel>
        )
    }
}
