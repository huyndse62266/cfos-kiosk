import React, { Component } from 'react'
import DishStatus from '../../components/DishStatus/DishStatus'
import Numberpad from '../../components/History/Numberpad'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import './Order.scss'
import { Row,Col,Button } from 'antd';
import { connect } from 'react-redux'

class CheckOrder extends Component {
    state = {
        orders: this.props.orders
    };

    goBackPage = () =>{
        var { history } = this.props
        history.goBack()
    }

    render() {
        var {orders} = this.props;
        var {orderDetailReponseVMList} = orders;
        return (
            <Row >
                <Col span={12} offset={3} className="py-5">
                    <Row className="py-4">
                        <Col span={2}>
                            <Button className="arrow-button" style={{fontSize: '20px'}} onClick={()=>{this.goBackPage()}}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </Button>
                        </Col>
                        <Col span={22} className="py-2">
                            <h3 className="text-left p-0">Your order status</h3>
                        </Col>
                    </Row>
                    {!orderDetailReponseVMList ? <div/> : 
                        <Row className="order-status-wrapper px-4 ">
                        <h4 className="text-left pt-3">Order Number: {orders.orderNumber}</h4>
                        {!orderDetailReponseVMList ? <div/> : 
                        orderDetailReponseVMList.map((orderDetail, index) => <DishStatus orderDetail={orderDetail}/> ) }
                    </Row> }
                    
                </Col>
                <Col span={6} className="px-3 bg-light ml-5">
                    <Numberpad/>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        orders: state.orders
    }
}


export default connect(mapStateToProps,null)(CheckOrder);
