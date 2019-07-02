import React, { Component } from 'react'
import {Col, Row, Button} from 'antd';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import ReactToPrint from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import ReceiptTemplate from '../../components/Receipt/ReceiptTemplate'
import './Order.scss'

class CompleteOrder extends Component {

    
    render() {
        
        return (
            <div className="order-config-container">
                <Row>
                    <Col span={2} offset={11}>
                        <div className="py-2 text-center">
                            <FontAwesomeIcon icon={faCheck} style={{fontSize:'48px', color:'green'}} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} offset={10}>
                        <div className="py-2 text-center">
                            <h2>Thank you!</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} offset={10}>
                        <div className="w-100 py-3 order-id-div text-center">
                            <span className="order-id-text py-0">Order Number: {this.props.orderID}</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={10} offset={7}>
                     <div className="text-center py-5">
                            <h3 className="py-0">Please remember the number and collect your order at restaurant dishes area</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} offset={10}>
                        <div className="w-100 py-3">
                            <Link to="/menu"><Button type="primary" size="large" className="w-100 px-5 button-custom">Go to home</Button></Link>                       
                        </div>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        items: state.cart.addedItems,
        pricetotal: state.cart.total,
        orderID: state.cart.orderID
    }
}



export default connect(mapStateToProps,null)(CompleteOrder);
