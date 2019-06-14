import React, { Component } from 'react'
import FoodType from './../FoodType'

export default class DinkScreen extends Component {
    render() {
        return (
            <div className="container-fluid d-flex flex-column w-100 p-0"> 
                <FoodType name="Nước Ngọt"/>
                <FoodType name="Trà sữa"/>
                <FoodType name="Sinh Tố"/>
            </div>
        )
    }
}
