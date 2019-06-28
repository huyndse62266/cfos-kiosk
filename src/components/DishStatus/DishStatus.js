import React, { Component } from 'react'
import restaurantLogo from '../../images/khai-niem-nha-hang.jpg';
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
        let myDiv = null;
        if(this.state.isReady){
            myDiv = <div className="col-lg-3 d-flex px-4 justify-content-end align-items-center">            
                <div className="d-flex flex-row">
                    <div className="col-lg-10 ">
                        <div className="row text-right">
                            <a className="status-finish">Finish</a>
                        </div>
                        <div className="row text-right">
                            <a className="status-finish-description">Waiting for pick up</a>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-end align-items-center check-icon">
                        <FontAwesomeIcon icon={faCheck}/>
                    </div>
                </div>
            </div>
        }else{
            myDiv = <h4 className="status-waiting">Cooking ...</h4>
        }
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
                    {orderDetail.oderDetailStatus=='WAITING'?<h4 className="status-waiting">Cooking ...</h4>:<Row type="flex" justify="space-around" align="middle">
                        <Col span={20}>
                            <a className="status-finish p-0">Finish</a><br/>
                            <a className="status-finish-description">Waiting for pick up</a>
                        </Col>
                        <Col span={4} className="check-icon"><FontAwesomeIcon icon={faCheck}/></Col>
                    </Row>}
                    
                </Col>
            </Row>
        )
    }
}
