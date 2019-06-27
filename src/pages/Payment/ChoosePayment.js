import React, { Component } from 'react'
import {Row,Col,Button} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import CartPayment from '../../components/Cart/CartPayment'
import TypePayment from '../../components/Cart/TypePayment'
import './Payment.scss';
export default class ChoosePayment extends Component {
    goBackPage = () =>{
        var { history } = this.props
        history.goBack()
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={5} className="text-right py-5">
                        <Button className="arrow-button" style={{fontSize: '20px'}} onClick={()=>{this.goBackPage()}}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Button>
                    </Col>
                    <Col span={11}>
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
