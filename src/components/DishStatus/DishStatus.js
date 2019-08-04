import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faUtensils} from '@fortawesome/free-solid-svg-icons'
import {Row,Col,Icon} from 'antd'
import {ReactComponent as Store } from '../../icons/Store.svg'
import {ReactComponent as StatusDone } from '../../icons/StatusDone.svg'
import {ReactComponent as StatusCooking } from '../../icons/StatusCooking.svg'
import './DishStatus.css'

export default class DishStatus extends Component {

    constructor(props){
        super(props);
        this.state = { 
            isReady : this.props.orderStaus
        }
    }

    renderFoodOptionName = (FoodOptionList) =>{
        let OptionString = "";
        FoodOptionList.map((FoodOption) =>{
            // console.log(OptionString.indexOf(FoodOption.parentName));
            // OptionString += FoodOption.parentName + " : " + FoodOption.foName + ", "
            if(OptionString.indexOf(FoodOption.parentName) !== -1){
                OptionString +=  FoodOption.foName + ", "
            }else{
                OptionString += FoodOption.parentName + ": " + FoodOption.foName + ", "
            }
            
        })
        return OptionString.slice(0,OptionString.length-2)
    }
    render() {
        var {orderDetail} = this.props;
        console.log(orderDetail.orderDetailFoodOption)
        return (

            <Row className="dish-detai-wrapper" type="flex" justify="start">
                <Col span={2} className="text-center my-auto">
                    <div className="order-detail-quantity opensan-24-semibold">
                        <span >x{orderDetail.quantity}</span>
                    </div>
                </Col>
                <Col span={5} className="img-dish-status-wrapper" >
                    {orderDetail.foodVM.promotion > 0 ?  <span className="dish-status-promotion">
                        -{orderDetail.foodVM.promotion}%
                    </span>:<span></span>}
                    <div className="w-100 h-100">
                        <img src={orderDetail.foodVM.imageVMS[0].image} className="image-order-detail" alt="Image Not Found"/>
                    </div>
                    
                </Col>
                <Col span={8} className="text-left my-auto" offset={1}>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={2} style={{fontSize:'30px'}}><Icon component={Store}/></Col>
                        <Col span={16}><i className="opensan-18-bold text-left">{orderDetail.storeVM.storeName}</i></Col>
                        <Col span={6}></Col>
                    </Row>
                    <Row>
                        <h4 className="opensan-24-bold py-1">{orderDetail.foodVM.foodName}</h4>
                    </Row>
                    <Row>
                        <Col>
                            {orderDetail.orderDetailFoodOption.length > 0 ? <span className="food-option-check-order">{this.renderFoodOptionName(orderDetail.orderDetailFoodOption)}</span>:<span className="food-option-check-order">Tùy chọn: Mặc định</span> }
                        </Col>
                    </Row>                  
                </Col>               
                <Col span={8} className="dish-status text-right">
                    {orderDetail.oderDetailStatus==='READY'?<Row type="flex" justify="space-around" align="middle"className="w-100">
                        <Col span={20}>
                            <span className="status-finish p-0">Hoàn thành</span><br/>
                            <span className="status-finish-description">Đang chờ lấy</span>
                        </Col>
                        <Col span={4} className="done-icon"><Icon component={StatusDone}/></Col>
                    </Row>:<Row type="flex" justify="space-around" align="middle"className="w-100">
                        <Col span={20}>
                            <span className="status-waiting">Cooking</span>
                        </Col>
                        <Col span={4} className="done-icon"><Icon component={StatusCooking}/></Col>
                    </Row>}
                    
                </Col>
            </Row>
        )
    }
}
