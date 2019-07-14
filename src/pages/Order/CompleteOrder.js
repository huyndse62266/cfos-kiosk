import React, { Component } from 'react'
import {Col, Row, Button, Icon} from 'antd';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import ReactToPrint from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, } from '@fortawesome/free-regular-svg-icons'
import ReceiptTemplate from '../../components/Receipt/ReceiptTemplate'
import {restoreCart} from '../../action/cart'
import './Order.css'
import {ReactComponent as cartCheckSVG } from '../../icons/cartCheck.svg'
import {ReactComponent as LongArrowLeft } from '../../icons/LongArrowLeft.svg'
import {ReactComponent as alertsvg } from '../../icons/alert.svg'
class CompleteOrder extends Component {
    constructor(props){
        super(props);
        this.state= {
            orderNumber: 0
        }
       
    }

    componentDidMount(){
        this.setState({
            orderNumber: this.props.orderNumber
        })
        document.getElementById("button-printer").click();
    }
    render() {
        return (
            <div className="order-config-container">
                <ReactToPrint
                        trigger={() => <div style={{display:'none'}}><Button id="button-printer"></Button></div>}
                        content={() => this.componentRef}
                        onAfterPrint={() => this.props.restoreMyCart()}
                        copyStyles
                />
                <div style={{display:'none'}}>
                    <ReceiptTemplate items={this.props.items} totalPrice={this.props.pricetotal} orderNumber={this.props.orderNumber} ref={el => (this.componentRef = el)} /> 
                </div>
                <Row className="warning-wrapper">
                    <Col span={4}>
                        <div className="warning-icon-wrapper">
                            <Icon component={alertsvg} style={{fontSize : '50px'}} />
                        </div>
                    </Col>
                    <Col span={20} className="warning-info">
                        <span>Lưu ý: Món ăn sẽ bị hủy sau 1 tiếng kể từ khi được hoàn thành nếu như không có người đến lấy</span>
                    </Col>
                </Row>
                <Row className="display-message-success">
                    <p> <FontAwesomeIcon icon={faCheckCircle}/> Thanh toán thành công</p>
                </Row>
                <Row className="thank-you-message">
                    <p className="mb-0">Xin cảm ơn</p>
                </Row>
                <Row>
                    <div className="py-2 text-center">
                        <Icon component={cartCheckSVG} style={{fontSize : '125px'}} />;
                    </div>
                </Row>
                <Row>
                    <Col span={4} offset={10}>
                        <div className="display-order-number">
                            <span className="order-id-text py-0">Mã đơn hàng: {this.props.orderNumber}</span>
                        </div>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={10}>
                     <div className="notifi-mess-wrapper">
                        <h3 className="py-0">Vui lòng lấy <span style={{color:'#FF331C'}}>món ăn </span> của bạn tại các khu vực để đồ ăn <span style={{color:'#FF331C'}}>trước mỗi cửa hàng</span> tương ứng với <span style={{color:'#FF331C'}}>mã đơn hàng</span></h3>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} offset={10}>
                        <div className="back-home-button-wrapper">
                            <Link to="/menu">
                                <button type="button" className="btn button-custom">
                                    <Row>
                                        <Col span={8}><Icon component={LongArrowLeft} style={{fontSize : '30px', padding:'0% 10%'}} /></Col>
                                        <Col span={16} className="py-1"><span className>Trở về trang chủ</span></Col>
                                    </Row>
                                </button>
                            </Link>                       
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
        orderNumber: state.orders.orderNumber
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        restoreMyCart: ()=>{
            dispatch(restoreCart())
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CompleteOrder);
