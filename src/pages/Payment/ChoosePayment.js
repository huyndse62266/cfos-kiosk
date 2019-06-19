import React, { Component } from 'react'
import {Row,Col} from 'antd'
import CartPayment from '../../components/Cart/CartPayment'
import TypePayment from '../../components/TypePayment'
export default class ChoosePayment extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={16}>
                        <TypePayment/>
                    </Col>
                    <Col span={8}>
                        <CartPayment/>
                    </Col>
                </Row>
            </div>
        )
    }
}
