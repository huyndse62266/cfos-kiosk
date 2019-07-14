import React, { Component } from 'react'
import {Row,Col,Button} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons'
import OverviewBasket from '../../components/Payment/OverviewBasket'
import PaymentType from '../../components/Payment/PaymentType'
import './Payment.css';
export default class ChoosePayment extends Component {
    goBackPage = () =>{
        var { history } = this.props
        history.goBack()
    }
    render() {
        return (
            <Row className="choose-payment-container">
                {/* <Col span={5} className="text-right py-5">
                    <Button className="arrow-button" style={{fontSize: '20px'}} onClick={()=>{this.goBackPage()}}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Button>
                </Col>
                <Col span={11}>
                    <PaymentType/>
                </Col>
                <Col span={8} className="cart-payment-div h-100">
                    <OverviewBasket />
                </Col> */}
                <Col span={4} className="back-page-wrapper">
                    <button type="button" className="btn arrow-button bg-white"onClick={()=>{this.goBackPage()}}>
                        <FontAwesomeIcon icon={faLongArrowAltLeft} /> Trở về
                    </button>
                </Col>
                <Col span={9} className="payment-type-container">
                    <PaymentType/>
                </Col>
                <Col span={7} offset={4} className="h-100">
                    <OverviewBasket />
                </Col>
            </Row>
        )
    }
}
