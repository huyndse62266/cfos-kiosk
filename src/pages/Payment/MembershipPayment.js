import React, { Component } from 'react'
import {Row,Col, Icon} from 'antd'
import './Payment.css'
import {ReactComponent as CardSwiperSVG } from '../../icons/CardSwiper.svg'
import {ReactComponent as LongArrowLeft } from '../../icons/LongArrowLeft.svg'
export default class MembershipPayment extends Component {
    goBackPage = () =>{
        var { history } = this.props
        history.goBack()
    }

    render() {
        return (
            <div>
                <Row className="payment-process"> Tiến hành thanh toán</Row>
                <Row className="text-center">
                    <Icon component={CardSwiperSVG} style={{fontSize:'300px'}}/>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={10}>
                     <div className="notifi-mess-wrapper">
                        <h3 className="py-0">Đặt <span style={{color:'#FF331C'}}>thẻ </span> của bạn gần máy thanh toán bên dưới và nhập mật khẩu nếu có</h3>
                    </div>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col style={{width:"10%"}}>
                        <button type="button" className="btn cancel-membership-button" onClick={()=>{this.goBackPage()}}>
                            <Icon component={LongArrowLeft} style={{fontSize : '30px', padding:'5% 10%'}} />
                            <span className>Hủy bỏ</span>
                        </button>
                    </Col>
                </Row>
            </div>
        )
    }
}
