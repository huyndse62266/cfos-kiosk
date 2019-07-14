import React, { Component } from 'react'
import {Row,Col} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
export default class Cart extends Component {
    render() {
        var {food, type} = this.props;
        console.log(food)
        return (
            <Row className="h-100 cart-checkout-container">
                <Col span={8} className="h-100">
                    <Row>
                        <Row className="display-quantity-checkout-wrapper">
                            <div className="display-quantity-checkout">
                                x{food.cartQuantity}
                            </div>
                        </Row>
                        <Row className="img-style-wrapper">
                            <img src={food.foodImage} className="img-style" alt="Cinque Terre"/>
                        </Row>  
                    </Row>
                </Col>
                <Col span={16} className="cart-item-info-wrapper" type="flex" justify="start">
                    <h6 className="store-name"><FontAwesomeIcon icon={faMapMarkedAlt}/>{food.storeName}</h6>
                    <h5 className="food-name">{food.foodName}</h5>
                    <h6 className="option-name">Không hành, không cay</h6>
                </Col>
            </Row>
        )
    }
}
