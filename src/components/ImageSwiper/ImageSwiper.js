import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import restaurantLogo from '../../images//0.jpg'
import './ImageSwiper.scss'
export default class ImageSwiper extends Component {
    render() {
        return (
            <Carousel showThumbs = {false} emulateTouch = {true} autoPlay = {true} infiniteLoop= {true} dynamicHeight showArrows={false}>
                <div>
                    <img src={restaurantLogo}/>
                </div>
                <div>
                    <img src={restaurantLogo}/>
                </div>
                <div>
                    <img src={restaurantLogo}/>
                </div>
            </Carousel>
        )
    }
}
