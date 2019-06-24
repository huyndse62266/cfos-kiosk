import React, { Component } from 'react'
import { Avatar, Button,Row,Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTag, faMinus, faPlus, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import ScrollArea from 'react-scrollbar';
import { connect } from 'react-redux'
import { addQuantity,subQuantity } from '../../action/index';
import Foodingredients from '../../components/DishDetail/Foodingredients'
import MoreOption from '../../components/DishDetail/MoreOption'

import 'antd/dist/antd.css';
import './DishInfo.scss'


class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks: this.props.food.quantity,
          show: true
        };
    }
    IncrementItem = (id) => {
        this.props.addQuantity(id);
    }
    DecreaseItem = (id) => {
        this.props.subQuantity(id);
    }   
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }
    renderPromotionTag = (rate) =>{
        if(rate > 0)
            return(<h5 className="text-left px-3">{rate}% Discount all dishes</h5>)
    }

    render() {
        var {food} = this.props
        return (
            <div className="container-fluid" style={{height: "80%"}}>
                <Row>
                    <Col span={8}>
                        <ScrollArea speed={0.8}
                            verticalScrollbarStyle={{display:'none'}}
                            className="area"
                            contentClassName="content"
                            horizontal={false} style={{height: '630px'}}>
                        <Row className="d-flex flex-column pr-3">
                            <Col span={18} offset={3}>
                                <img src={food.foodImage} className="img-thumbnail" alt="Cinque Terre" style={{height:"40%", width: '100%'}}/>
                            </Col>
                            <Col span={18} offset={3}>
                                <img src={food.foodImage} className="img-thumbnail" alt="Cinque Terre" style={{height:"40%", width: '100%'}}/>
                            </Col>
                            <Col span={18} offset={3}>
                                <img src={food.foodImage} className="img-thumbnail" alt="Cinque Terre" style={{height:"40%", width: '100%'}}/>
                            </Col>
                            <Col span={18} offset={3}>
                                <img src={food.foodImage} className="img-thumbnail" alt="Cinque Terre" style={{height:"40%", width: '100%'}}/>
                            </Col>
                        
                        </Row>
                        </ScrollArea>
                    </Col>
                    <Col span={16}>
                        <Row>
                            <Col span={12} className="px-3">
                                <Row>
                                    <Col span={3} offset={1}>
                                        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" size="small"/>
                                    </Col>
                                    <Col span={20}>
                                        <a>Nhà hàng Lorem Ipsum</a>
                                    </Col>
                                </Row>
                                <Row className="pt-3">
                                    <h4 className="text-left">{food.foodName}</h4>
                                </Row>
                                <Row className="pt-2">
                                    <FontAwesomeIcon icon={faStar} style={{color: 'orange'}}/>
                                    <FontAwesomeIcon icon={faStar} style={{color: 'orange'}}/>
                                    <FontAwesomeIcon icon={faStar} style={{color: 'orange'}}/>
                                    <FontAwesomeIcon icon={faStar} style={{color: 'orange'}}/>
                                    <FontAwesomeIcon icon={faStar} style={{color: 'orange'}}/>
                                </Row>
                                <Row className="pt-2">
                                    <h5 className="font-weight-bold">{food.price} đ</h5>
                                </Row>
                                <Row className="border-top py-2">
                                    <a className="text-left" style={{fontSize: '14px'}}>{food.foodDescription}</a>
                                </Row>
                                <Row className="border-top py-3">
                                    <Col span={2}>
                                        <FontAwesomeIcon icon={faTag} style={{color: 'green',fontSize:'24px'}} />
                                    </Col>
                                    <Col span={22}>
                                        {this.renderPromotionTag(food.promotion)}
                                    </Col>                                   
                                </Row>
                                <Row>
                                    <h5>Amount</h5>
                                </Row>
                                <Row className="d-flex flex-row py-2">
                                    <Button style={{backgroundColor: '#D2D2D2'}} onClick={()=>{this.DecreaseItem(food.foodId)}} ><FontAwesomeIcon icon={faMinus} /></Button>
                                    <div className="px-3 py-1">
                                        { this.state.show ? <h2 style={{fontSize:'1rem'}}>{ food.cartQuantity }</h2> : '' }
                                    </div>
                                    <Button style={{backgroundColor: '#D2D2D2'}} onClick={()=>{this.IncrementItem(food.foodId)}} ><FontAwesomeIcon icon={faPlus} /></Button>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <ScrollArea speed={0.8}
                                verticalScrollbarStyle={{display:'none'}}
                                className="area"
                                contentClassName="content"
                                horizontal={false} style={{height: '630px'}}>
                                    <Row>
                                        <Foodingredients/>
                                    </Row>
                                    <Row>
                                        <h6 className="px-3 py-2">More options</h6>
                                    </Row>
                                    <Row className="px-4">
                                        <MoreOption name="Cheese slice" price="15"/>
                                        <MoreOption name="Salad" price="10"/>            
                                        <MoreOption name="Bacon" price="5"/>       
                                        <MoreOption name="Bacon" price="5"/>       
                                        <MoreOption name="Bacon" price="5"/>       
                                        <MoreOption name="Bacon" price="5"/>       
                                        <MoreOption name="Bacon" price="5"/>       
                                        <MoreOption name="Bacon" price="5"/>       
                                        <MoreOption name="Bacon" price="5"/>       
                                    </Row>      
                                </ScrollArea>
                                <Row className="py-3 float-right">
                                    <Button style={{backgroundColor: '#D2D2D2'}} >
                                        <FontAwesomeIcon icon={faSyncAlt}/> Reset to default
                                    </Button>
                                </Row>
                            </Col>
                        </Row>
                        <Row type="flex" justify="end" className="border-top py-3">
                            <Col span={14} className="px-2">
                                <h3 className="font-weight-bold text-right px-4 pt-2 mb-0"><small>Provisional:</small> 95 000 đ</h3>
                            </Col>
                            <Col span={10}>
                                <Button className="button">
                                    Add to Basket
                                </Button>
                            </Col>
                        </Row>
                    </Col>

                    
                </Row>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        addQuantity: (id)=>{
            dispatch(addQuantity(id))
        },
        subQuantity:(id) =>{
            dispatch(subQuantity(id))
        }
        
    }
}
export default connect(null,mapDispatchToProps)(DishDetail)
