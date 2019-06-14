import React, { Component } from 'react'
import './Foodingredients.scss'
export default class Foodingredients extends Component {
    render() {
        return (
            <div>
                <div className="row px-3 py-1">
                    <h5 className="font-weight-bold">Dish's Ingredient</h5>
                </div>
                <div className="row">
                    <div class="col-lg-12">
                        <div class="row my-3">
                            <div class="col-lg-6">
                                <div className="text-center rounded food-info-active">
                                    <a>Dolor</a>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div className="text-center rounded food-info-inactive">
                                    <a>Dolor</a>
                                </div>
                            </div>
                        </div>
                        <div class="row my-3">
                            <div class="col-lg-6">
                            <div className="text-center rounded food-info-active">
                                    <a>Dolor</a>
                                </div>
                            </div>
                            <div class="col-lg-6">
                            <div className="text-center rounded food-info-active">
                                    <a>Dolor</a>
                                </div>
                            </div>
                        </div>
                        <div class="row my-3">
                            <div class="col-lg-6">
                            <div className="text-center rounded food-info-inactive">
                                    <a>Dolor</a>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div className="text-center rounded food-info-inactive">
                                    <a>Dolor</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
