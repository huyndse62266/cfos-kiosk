import React, { Component } from 'react'
import { Row, Col } from 'antd';
import NumberFormat from 'react-number-format'; 
import './Receipt.css'
export default class ReceiptTemplate extends Component {

    render() {
        var {items, totalPrice,originPrice, orderNumber} = this.props;
        var count = 0;
        return (
            <div>
                <Row className="text-center">
                    <span className="opensan-18-semibold">Press Meal</span>
                </Row>
                <Row className="px-2">
                    <span className="bill-address">
                        330 Trần Hưng Đạo, Phường Nguyễn Cư Trinh, Quận 1, Tp. HCM.
                    </span>
                </Row>
                <Row className="text-center py-2">
                    <h6>Phiếu thanh toán</h6>
                </Row>
                <Row>
                <h6 className="px-4 py-2">Số thứ tự đơn hàng: {orderNumber}</h6>
                </Row>
                <Row className="px-3">
                    <table>
                        <thead>
                            <tr>
                                <th><h6 style={{fontSize:'11px'}}>Tên</h6> </th>
                                <th><h6 style={{fontSize:'11px'}}>Số lượng</h6> </th>
                                <th><h6 style={{fontSize:'11px'}}>Đơn giá</h6> </th>
                                <th><h6 style={{fontSize:'11px'}}>Thành tiền</h6> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.length > 0 ? items.map((item,index) =>{
                                count += item.cartQuantity;
                                return <tr key={index}>
                                <td><h6 style={{fontSize:'11px'}}>{item.foodName}</h6></td>
                                <td className="text-center"><h6 style={{fontSize:'11px'}}>{item.cartQuantity}</h6></td>
                                <td><h6 style={{fontSize:'11px'}}>{item.price}</h6></td>
                                <td><h6 style={{fontSize:'11px'}}>{item.totalPriceOrigin}</h6></td>
                                </tr>
                            }):<tr></tr>}
                        </tbody>
                    </table>
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
                    Chúc quý khách ngon miệng
                </Row>
                
          </div>
        )
    }
}


