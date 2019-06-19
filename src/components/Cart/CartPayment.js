import React, { Component } from 'react'
import {Row,Col} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import CartItemMini from './CartItemMini'
import './Cart.scss'
export default class CartPayment extends Component {
    render() {
        return (
            <div className="container-fluid px-5 py-0    bg-light">
                <Row>
                    <Col span={24}>
                        <div className="text-center py-4" >
                            <FontAwesomeIcon icon={faShoppingBasket} style={{fontSize: '24px'}}/>
                            <a className="font-weight-bold" style={{fontSize: '18px'}}> Your Orders</a>
                        </div>
                    </Col>
                </Row>

                <Row gutter={48}>
                    <Col span={12}>
                        <CartItemMini/> 
                    </Col>
                    <Col span={12}>
                        <CartItemMini/> 
                    </Col>
                    <Col span={12}>
                        <CartItemMini/> 
                    </Col>
                    <Col span={12}>
                        <CartItemMini/> 
                    </Col>
                    <Col span={12}>
                        <CartItemMini/> 
                    </Col>
                </Row>
                <Row>
                    <h3 className="text-right py-2">Total: 235.000 đ</h3>
                </Row>

            </div>
        )
    }
}
