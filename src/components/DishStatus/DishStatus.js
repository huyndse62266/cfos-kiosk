import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import {Row,Col,Avatar} from 'antd'
import './DishStatus.scss'

export default class DishStatus extends Component {

    constructor(props){
        super(props);
        this.state = { 
            isReady : this.props.orderStaus
        }
    }

    render() {
        var {orderDetail} = this.props;
        return (

            <Row className="p-0 py-3">
                <Col span={4}>
                    <img src={orderDetail.foodVM.foodImage} className="img-thumbnail" alt="Cinque Terre"/>
                </Col>
                <Col span={10} className="col-lg-5 p-2 px-3  text-left">
                    <Row className="py-2">
                        <h4 className="font-weight-bold">{orderDetail.foodVM.foodName}</h4>
                    </Row>
                    <Row className="py-2">
                        <Col span={3}><Avatar style={{ backgroundColor: '#87d068' }} icon="user" size="small"/></Col>
                        <Col span={16}><h6>Nhà hàng Lorem Ipsum</h6></Col>
                    </Row>
                </Col>
                <Col span={2} className="quantity-col">
                    <h4 className="my-auto">x{orderDetail.quantity}</h4>
                </Col>
                <Col span={8} className="dish-status text-right">
                    {orderDetail.oderDetailStatus==='WAITING'?<h4 className="status-waiting">Cooking ...</h4>:<Row type="flex" justify="space-around" align="middle">
                        <Col span={20}>
                            <span className="status-finish p-0">Finish</span><br/>
                            <span className="status-finish-description">Waiting for pick up</span>
                        </Col>
                        <Col span={4} className="check-icon"><FontAwesomeIcon icon={faCheck}/></Col>
                    </Row>}
                    
                </Col>
            </Row>
        )
    }
}
