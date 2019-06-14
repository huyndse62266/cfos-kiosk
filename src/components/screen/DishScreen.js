import React, { Component } from 'react'
import FoodType from './../FoodType'

export default class DishScreen extends Component {
    render() {
        return (
            <div className="container-fluid d-flex flex-column w-100 p-0"> 
                <FoodType name="Cơm"/>
                <FoodType name="Mì"/>
                <FoodType name="Gà rán"/>
            </div>
        )
    }
}
