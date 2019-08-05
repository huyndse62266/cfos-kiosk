import React, { Component } from 'react'
import {Row,Col, Icon} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import {ReactComponent as StoreIcon } from '../../../icons/Store.svg'
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
                        <Row>
                            <img src={food.foodImage} className="img-style" alt="Image Not Found"/>
                        </Row>  
                    </Row>
                </Col>
                <Col span={16} className="cart-item-info-wrapper" type="flex" justify="start">
                    <Row>
                        <Col span={3}><Icon component={StoreIcon} style={{fontSize:'25px'}}/></Col>
                        <Col span={21}><span className="store-name">{food.storeName}</span></Col>
                    </Row>
                    <Row className="food-name">{food.foodName}</Row>
                    <Row className="option-name">Mặc định</Row>
                </Col>
            </Row>
        )
    }
}
