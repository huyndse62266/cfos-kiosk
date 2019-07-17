import React, { Component } from 'react'
import { Row, Col } from 'antd';
import NumberFormat from 'react-number-format'; 
export default class ReceiptTemplate extends Component {

    render() {
        var {items, totalPrice,originPrice, orderNumber} = this.props;
        console.log(items)
        var count = 0;
        return (
            <div>
                <Row className="text-center">
                    <h3 style={{fontFamily: 'Times New Roman'}}>Food House</h3>
                </Row>
                <Row >
                <Col span={22} offset={1}>
                    <h6 style={{ fontSize: "12px", fontWeight: 'bold',fontFamily: 'Times New Roman' }}>
                        Address: Đường D1, Khu Công Nghệ Cao, Phường Tân Phú, Quận 9, Hồ
                    Chí Minh 715650
                    </h6>
                </Col>
                </Row>
                <Row className="text-center">
                    <h3>Phiếu thanh toán</h3>
                </Row>
                <Row>
                <h6 className="px-4 py-2">Số thứ tự đơn hàng: {orderNumber}</h6>
                </Row>
                <table>
                    <thead>
                        <tr>
                            <th><h6 style={{fontSize:'10px'}}>Tên</h6> </th>
                            <th><h6 style={{fontSize:'10px'}}>Số lượng</h6> </th>
                            <th><h6 style={{fontSize:'10px'}}>Đơn giá</h6> </th>
                            <th><h6 style={{fontSize:'10px'}}>Thành tiền</h6> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item,index) =>{
                            count += item.cartQuantity;
                            return <tr>
                            <td><h6 style={{fontSize:'10px'}}>{item.foodName}</h6></td>
                            <td className="text-center"><h6 style={{fontSize:'10px'}}>{item.cartQuantity}</h6></td>
                            <td><h6 style={{fontSize:'10px'}}>{item.price}</h6></td>
                            <td><h6 style={{fontSize:'10px'}}>{item.cartQuantity * item.price}</h6></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <Row type="flex" justify="end" className="py-4">
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
            
          </div>
        )
    }
}


