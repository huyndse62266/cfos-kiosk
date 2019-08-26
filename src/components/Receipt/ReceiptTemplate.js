import React, { Component } from 'react'
import { Row, Col } from 'antd';
import NumberFormat from 'react-number-format'; 
import './Receipt.css'
export default class ReceiptTemplate extends Component {

    addOptionPrice(optionList){
        let price = 0;
        optionList.map(option =>{
            if(option.quantity !== undefined){
                price += option.optionPrice * option.quantity
            }
        })
        return  "+" + price +" đ tùy chọn món ăn"
    }

    render() {
        var {items, totalPrice,originPrice, orderNumber} = this.props;
        var count = 0;
        console.log(orderNumber)
        return (
            <div className="bill-container">
                <Row className="text-center">
                    <h1 className="opensan-18-semibold">AEON CITIMART</h1>
                </Row>
                <Row className="px-2">
                    <h1 className="bill-address">
                        672 Quang Trung, P. 11, Q. Gò Vấp, Ho Chi Minh City, Vietnam
                    </h1>
                </Row>
                <Row className="text-center py-2">
                    <h6>Phiếu thanh toán</h6>
                </Row>
                <Row>
                <h6 className="text-center py-2">Số đơn hàng: <span className="order-number-bill">{orderNumber}</span> </h6>
                </Row>
                <Row className="px-3 py-4">
                    <Row className="bill-detail">
                        <Col span={12}>Tên món ăn</Col>
                        <Col span={2}>SL</Col>
                        <Col span={4}>Đơn giá</Col>
                        <Col span={6} className="text-right">Thành tiền</Col>
                    </Row>
                    {items.length > 0 ? items.map((item,index) =>{
                                count += item.cartQuantity;
                                return <Row key={index} className="bill-detail">
                                    <Col span={12}><span>{item.foodName}{item.optionList !==  null ? <div><p className="add-option-des">{this.addOptionPrice(item.optionList)}</p></div>: <div/>}</span></Col>
                                    <Col span={2}>{item.cartQuantity}</Col>
                                    <Col span={4} className="text-right">{item.totalPriceOrigin/item.cartQuantity}</Col>
                                    <Col span={6} className="text-right">{item.totalPriceOrigin}</Col>    
                                </Row>
                            }):<tr></tr>}
                </Row>
                <Row type="flex" justify="end" className="py-4" className="border-footer-bill">
                    <Col span={16} style={{textAlign:'right'}}>
                        <h6>Tổng SL:  </h6>
                        <h6>Tạm tính:  </h6>
                        <h6>Khuyến mãi:  </h6>
                        <h6>Tổng tiền:</h6>  
                    </Col>  
                    <Col span={8} className="text-right px-3">
                        <h6><NumberFormat value={count} displayType={'text'} thousandSeparator={','} /></h6>
                        <h6><NumberFormat value={originPrice} displayType={'text'} thousandSeparator={','} /></h6>
                        <h6><NumberFormat value={originPrice - totalPrice} displayType={'text'} thousandSeparator={','} /></h6>
                        <h6><NumberFormat value={totalPrice} displayType={'text'} thousandSeparator={','} /></h6> 
                    </Col>  
                </Row>
                <Row className="text-center">
                    <p>Chúc quý khách ngon miệng</p>
                </Row>
                
          </div>
        )
    }
}


