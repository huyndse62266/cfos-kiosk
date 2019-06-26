import React, { Component } from 'react'
import {Row,Col} from 'antd'
import CartPayment from '../../components/Cart/CartPayment'
import TypePayment from '../../components/Cart/TypePayment'
import './Payment.scss';
export default class ChoosePayment extends Component {
    render() {
        console.log('asdas')
        return (
            <div>
                <Row>
                    <Col span={16}>
                        <TypePayment/>
                    </Col>
                    <Col span={8} className="cart-payment-div">
                        <CartPayment />
                    </Col>
                </Row>
            </div>
        )
    }
}
