import React, { Component } from 'react'
import {Row,Col, Icon, message} from 'antd'
import './Payment.css'
import {ReactComponent as LongArrowLeft } from '../../icons/LongArrowLeft.svg'
import {ReactComponent as PriceCart } from '../../icons/PriceCart.svg'
import {ReactComponent as Purchaseicon } from '../../icons/Purchase icon.svg'
import cardSwiperImg from '../../images/Card input illustration.png'
export default class MembershipPayment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            IDCard: ''
        };
        this.handleChange = this.handleChange.bind(this)
    }
    goBackPage = () =>{
        var { history } = this.props
        history.goBack()
    }

    handleChange(event) {
        // console.log(event.target.value)
        
        if(event.target.value.length == 10){
            message.info('This is a normal message');
        }
      }
    render() {
        return (
            <div className="membership-payment-container">
                <Row className="payment-process" type="flex" justify="center">
                    <Col span={5}>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col span={4}>
                                <Icon component={Purchaseicon} className="price-cart-icon"/>
                            </Col>
                            <Col span={20} className="opensan-24-semibold   ">Tiến hành thanh toán ...</Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="text-center" style={{opacity:0}}>
                    <input class="form-control form-control-sm" type="text" autoFocus onChange={this.handleChange}/>
                </Row>
                <Row className="text-center">
                    <img src={cardSwiperImg} className="card-swipe-img"/>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={10}>
                     <div className="notifi-mess-wrapper">
                        <h3 className="py-0">Đặt <span style={{color:'#FF331C'}}>thẻ </span> của bạn gần máy thanh toán bên dưới và nhập mật khẩu nếu có</h3>
                    </div>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={3}>
                        <button type="button" className="btn cancel-membership-button" onClick={()=>{this.goBackPage()}}>
                            <Row type="flex" justify="space-around" align="middle">
                                <Col span={10}><Icon component={LongArrowLeft} className="back-arrow-icon-membership" /></Col>
                                <Col span={14}><span className="opensan-32-bold">Hủy bỏ</span></Col>
                            </Row>
                        </button>
                    </Col>
                </Row>
            </div>
        )
    }
}
