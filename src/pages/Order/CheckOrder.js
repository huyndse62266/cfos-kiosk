import React, { Component } from 'react'
import DishStatus from '../../components/DishStatus/DishStatus'
import './Order.scss'

export default class CheckDishStatus extends Component {
    render() {
        return (
            <div className="container-fluid d-flex flex-row p-0">
                <div className="col-lg-8 py-4">
                    <h3 className="text-left">Your order status</h3>
                    <div className="border-custom px-3" >
                        <h4 className="text-left pt-3">Order Number: 456</h4>
                        <DishStatus orderStaus={true}/>
                        <DishStatus orderStaus={false}/>
                        <DishStatus orderStaus={false}/>
                    </div>
                </div>
                <div className="col-lg-4 bg-success">
                    a
                </div>
            </div>
        )
    }
}
