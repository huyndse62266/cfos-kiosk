import React, { Component } from 'react'
import { Row,Col,Button,message, Icon } from 'antd';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight, faSearch, faBackspace, faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons'
import './Order.css'
import apiCaller from '../../utils/ApiCaller';
import DishStatus from '../../components/DishStatus/DishStatus'
import {ReactComponent as Checkstatusicon } from '../../icons/Checkstatusicon.svg'
import {ReactComponent as BillIcon } from '../../icons/BillIcon.svg'
import Noorderillustration from '../../images/Noorderillustration.png'

class CheckOrder extends Component {

    constructor(){
        super();
        this.state ={
            number : '',
            order: [],
            isError: false
        }
    }


    goBackPage = () =>{
        var { history } = this.props
        history.goBack()
    }

    addNumber = (num) =>{
        var a = this.state.number.concat(num);
        if(a.length <= 10){
            this.setState({
                number: a
            })
        }
       
    };
    subNumber = () =>{
        var a = this.state.number.substring(0,this.state.number.length-1);
        this.setState({
            number: a
        })
       
    };

    onCheck = () =>{
        apiCaller(`orders/search-order?orderNumber=${this.state.number}`,'GET',null).then(res =>{
            this.setState({
                order: res.data
            })
        }).catch(error =>{
            message.error(error.response.data.message)
        })
    }

    

    render() {
        var {order} = this.state
        var {orderDetailReponseVMList} = order;
        return (
            <Row className="check-order-container">
                <Col span={14} className="h-100 display-order-status-wrapper">
                    <Row>
                        <Col span={4}>
                            <Button className="back-home-button" onClick={()=>{this.goBackPage()}}>
                                <FontAwesomeIcon icon={faLongArrowAltLeft} /><span className="px-2 opensan-24-bold">Trở về</span>
                            </Button>
                        </Col>
                        <Col span={6}>
                            <Link to="/menu">
                                <Button className="move-menu-button">
                                    <span className="px-2 opensan-24-bold">Đặt món ăn</span><FontAwesomeIcon icon={faLongArrowAltRight} />
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="py-2"><Icon component={Checkstatusicon} className="check-status-icon-order-page"/><span className="opensan-32-bold">Trạng thái đơn hàng của bạn</span>
                    </Row>
                    {!orderDetailReponseVMList ? 
                        <div className="no-order">
                            {/* <Icon component={FollowIcon} className="follow-icon"/> */}
                            <img src={Noorderillustration} className="follow-img"/>
                            <p className="opensan-32-semibold text-center mb-0">Theo dõi đơn hàng</p>
                            <Row>
                                <Col span={8} offset={8}>
                                    <span className="input-follow-title">Điền mã đơn hàng của bạn để xem tráng thái của món ăn </span>
                                </Col>
                            </Row>
                        </div> : 
                        <div className="order-status-wrapper px-4 ">
                        <Row type="flex" justify="space-around" align="middle">
                            <Col span={1} className="text-left"><Icon component={BillIcon} className="bill-icon-check-order"/></Col>
                            <Col className="order-number-title" span={23}>Đơn hàng: {order.orderNumber} <span style={{color:'gray'}}>({orderDetailReponseVMList.length} món)</span></Col>
                        </Row>
                        {!orderDetailReponseVMList ? <div/> : 
                        orderDetailReponseVMList.map((orderDetail, index) => <DishStatus orderDetail={orderDetail}/> ) }
                    </div> }
                   
                    
                </Col>
                <Col span={7} className=" ml-2 h-100">
                    <div className="px-5 number-pad">
                        <Row className="display-number-border py-5">
                            <Col type="flex">
                                <p className="title-input-order-number-1">Điền <span style={{color:'red'}}>mã đơn hàng</span> của bạn</p>
                                <p className="title-input-order-number-2">để xem trạng thái của món ăn</p>
                                <Row className="display-number-panel" type="flex" justify="space-around" align="middle">
                                    {/* <Col span={4} className="my-auto"><FontAwesomeIcon icon={faSearch}/></Col> */}
                                    {/* <Col span={24}> </Col>*/}
                                    <Col span={6} className="icon-search"><FontAwesomeIcon icon={faSearch}/></Col>
                                    <Col span={6} className="display-number opensan-36-extrabold">{this.state.number}</Col>
                                    <Col span={6}></Col>
                                </Row>
                            </Col>
                        </Row>
                        <div className="py-2">
                            <Row className="py-2">
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('1')}}>
                                        1   
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('2')}}>
                                        2  
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('3')}}>
                                        3  
                                    </Button>
                                </Col>
                            
                            </Row>
                            <Row className="py-2">
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('4')}}>
                                        4   
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('5')}}>
                                        5  
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('6')}}>
                                        6  
                                    </Button>
                                </Col>
                            
                            </Row>
                            <Row className="py-2">
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('7')}}>
                                        7   
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('8')}}>
                                        8  
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('9')}}>
                                        9  
                                    </Button>
                                </Col>
                            
                            </Row>
                            <Row className="py-2">
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.subNumber()}} >
                                        <FontAwesomeIcon icon={faBackspace} />  
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="number-div"  onClick={()=>{this.addNumber('0')}}>
                                        0  
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="search-numberpad-button" onClick={()=>{this.onCheck()}} >
                                        <FontAwesomeIcon icon={faSearch} /><br/>
                                        <span>Tìm</span>    
                                    </Button>
                                </Col>
                            
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}




export default CheckOrder