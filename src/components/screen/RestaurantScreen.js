import React, { Component } from 'react'
import FoodType from "../FoodType";
export default class RestaurantScreen extends Component {
    render() {
        return (
            <div className="container-fluid d-flex flex-column w-100 p-0"> 
                <FoodType name="KFC"/>
                <FoodType name="Popeye"/>
                <FoodType name="Lotteria"/>
            </div>
        )
    }
}
