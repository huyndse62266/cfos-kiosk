import React, { Component } from 'react'
import {Row,Col} from 'antd'
import NumberFormat from 'react-number-format'
export default class ConfirmPaymentModal extends Component {
    render() {
        var {user} = this.props
        return (
            <div className="">
                <Row >
                    <Col span={12} className="text-left opensan-24-bold">Họ và tên:</Col>
                    <Col span={10} className="text-right opensan-24-semibold ">{user.fullname}</Col>
                </Row>
                <Row >
                    <Col span={12} className="text-left opensan-24-bold">Tên tài khoản:</Col>
                    <Col span={10} className="text-right opensan-24-semibold ">{user.username}</Col>
                </Row>
                <Row >
                    <Col span={12} className="text-left opensan-20-bold">Số tiền trong tài khoản</Col>
                    <Col span={10} className="text-right opensan-20-semibold "><NumberFormat value={user.walletAmount} displayType={'text'} thousandSeparator={','}/>  đ</Col>
                </Row>
                <Row >
                    <Col span={12} className="text-left opensan-20-bold">Tổng thanh toán</Col>
                    <Col span={10} className="text-right opensan-20-semibold ">-<NumberFormat value={this.props.totalPrice} displayType={'text'} thousandSeparator={','}/>  đ</Col>
                </Row>
                <Row >
                    <Col span={12} className="text-left opensan-20-bold">Số tiền trong tài khoản</Col>
                    <Col span={10} className="text-right opensan-20-semibold "><NumberFormat value={user.walletAmount-this.props.totalPrice} displayType={'text'} thousandSeparator={','}/>  đ</Col>
                </Row>
            </div>
        )
    }
}
