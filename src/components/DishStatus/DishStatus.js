import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faUtensils} from '@fortawesome/free-solid-svg-icons'
import {Row,Col,Avatar} from 'antd'
import './DishStatus.css'

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

            <Row className="dish-detai-wrapper" type="flex" justify="start">
                <Col span={2} className="text-center my-auto">
                    <div className="order-detail-quantity opensan-24-semibold">
                        <span >x{orderDetail.quantity}</span>
                    </div>
                </Col>
                <Col span={5}>
                    <img src={orderDetail.foodVM.imageVMS[0].image} className="image-order-detail" alt="Cinque Terre"/>
                </Col>
                <Col span={8} className="text-left my-auto" offset={1}>
                    <Row type="flex" justify="start" align="bottom">
                        <Col span={2} style={{fontSize:'20px'}}><FontAwesomeIcon icon={faMapMarkerAlt}/></Col>
                        <Col span={16}><h6>{orderDetail.storeVM.storeName}</h6></Col>
                    </Row>
                    <Row>
                        <h4 className="opensan-24-bold">{orderDetail.foodVM.foodName}</h4>
                    </Row>                  
                </Col>               
                <Col span={8} className="dish-status text-right">
                    {orderDetail.oderDetailStatus==='WAITING'?<h4 className="status-waiting">Cooking ...</h4>:<Row type="flex" className="w-100">
                        <Col span={20}>
                            <span className="status-finish p-0">Hoàn thành</span><br/>
                            <span className="status-finish-description">Đang chờ lấy</span>
                        </Col>
                        <Col span={4} className="done-icon"><FontAwesomeIcon icon={faUtensils}/></Col>
                    </Row>}
                    
                </Col>
            </Row>
        )
    }
}
