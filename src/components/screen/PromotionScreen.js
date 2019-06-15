import React, { Component } from 'react'
import FoodType from './../FoodType'

import ImageSwiper from '../ImageSwiper/ImageSwiper'
import $ from 'jquery';


export default class PromotionScreen extends Component {
    
    render() {
        return (
            <div className="container-fluid d-flex flex-column w-100 p-0"> 
                <div className="col-lg-12 align-middle w-100  justify-content-end align-items-center" style={{height:'400px'}}>
                    <div className="col-lg-8 mx-auto"><ImageSwiper/> </div>
                </div>      
                <FoodType name="Cơm"/>
                <FoodType name="Trà sữa"/>
                <FoodType name="Gà rán"/>
            </div>
        )
    }
}
