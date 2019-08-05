import React, { Component } from 'react'
import {Row,Col,Icon,Button} from 'antd'
import ReactToPrint from 'react-to-print';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ReceiptTemplate from '../../components/Receipt/ReceiptTemplate';
import {restoreCart} from '../../action/cart';
import {ReactComponent as PrintIcon } from '../../icons/Print icon.svg';
import {ReactComponent as LongArrowLeft } from '../../icons/LongArrowLeft.svg';
import printImage from '../../images/Receipt print illustration.png';
import './Printer.css'

class PrintProcess extends Component {

    constructor(props){
        super(props);
        this.state= {
            isDone: false
        }
       
    }

    componentDidMount(){
        document.getElementById("button-printer").click();
    }

    restoreCart = ()=>{
        this.setState({
            isDone: true
        })
    }
    render() {
        if(this.state.isDone){
            return <Redirect to={{pathname: "/complete"}}/>
        }
        return (
            <div className="print-process-container">
                <ReactToPrint
                        trigger={() => <div style={{display:'none'}}><Button id="button-printer"></Button></div>}
                        content={() => this.componentRef}
                        onAfterPrint={() => this.restoreCart()}
                        copyStyles
                />
                <div style={{display:'none'}}>
                    <ReceiptTemplate items={this.props.items} totalPrice={this.props.pricetotal} originPrice={this.props.originPrice} orderNumber={this.props.orderNumber} ref={el => (this.componentRef = el)} /> 
                </div>
                <Row className="print-title-wrapper opensan-24-semibold" type="flex" justify="center">
                    <Col span={1} className="print-icon"><Icon component={PrintIcon}/></Col>
                    <Col span={5} className="print-title"><span>Đang in hóa đơn của bạn . . .</span></Col>
                </Row>
                <Row className="print-img-wrapper">
                    <img src={printImage} className="print-img"/>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={10} className="get-bill-mess-wrapper">
                        Vui lòng lấy <span className="hightlight-red">hóa đơn</span> và <span className="hightlight-red">thanh toán</span> tại quầy thu ngân để hoàn thành đặt món.
                    </Col>
                </Row>
                {/* <Row type="flex" justify="center" className="back-menu-print-wrapper">
                    <Col span={4}>
                        <button type="button" className="btn back-print-btn">
                            <Row>
                                <Col span={4} className="back-icon-print"><Icon component={LongArrowLeft}/></Col>
                                <Col span={20} className="opensan-32-bold">Về trang chủ</Col>
                            </Row>
                        </button>
                    </Col>
                </Row> */}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        items: state.cart.addedItems,
        pricetotal: state.cart.total,
        originPrice: state.cart.originPrice,
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        restoreMyCart: ()=>{
            dispatch(restoreCart())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PrintProcess);
