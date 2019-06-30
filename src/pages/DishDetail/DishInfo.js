import React, { Component } from 'react'
import { Avatar, Button,Row,Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTag, faMinus, faPlus, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import ScrollArea from 'react-scrollbar';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux'
import { addToCart, updateItemCart, findCart } from '../../action/cart';
import Foodingredients from '../../components/DishDetail/Foodingredients'
import MoreOption from '../../components/DishDetail/MoreOption'

import 'antd/dist/antd.css';
import './DishInfo.scss'


class DishInfoUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          show: true,
          isEmpty: true
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        if(this.state.clicks > 0){
            this.setState({ clicks: this.state.clicks - 1 })
        };
    }
    addtoCartRequest = (id,cart) => {
        this.props.addtoCart(id,cart);
    }
    updateItemCartRequest = (id,cart) => {
        this.props.updateCart(id,cart);
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }
    renderPromotionTag = (rate) =>{
        if(rate > 0)
            return(<h5 className="text-left px-3">{rate}% Discount all dishes</h5>)
    }
    
    componentWillMount(){
        if(this.props.cartQuantity !== 0){
            this.setState({
                clicks: this.props.cartQuantity,
                isEmpty: false
            })
        }else{
            this.setState({
                clicks: 0
            })
        }
    }

  

    render() {
        var {food,cartQuantity} = this.props
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
                                        <span>Nhà hàng Lorem Ipsum</span>
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
                                    <span className="text-left" style={{fontSize: '14px'}}>{food.foodDescription}</span>
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
                                    <Button style={{backgroundColor: '#D2D2D2'}} onClick={this.DecreaseItem} ><FontAwesomeIcon icon={faMinus} /></Button>
                                    <div className="px-3 py-1">
                                        { this.state.show ? <h2 style={{fontSize:'1rem'}}>{this.state.clicks }</h2> : '' }
                                    </div>
                                    <Button style={{backgroundColor: '#D2D2D2'}} onClick={this.IncrementItem} ><FontAwesomeIcon icon={faPlus} /></Button>
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
                                <Row type="flex" justify="end" className="font-weight-bold text-right px-4 pt-2 mb-0">
                                    <Col span={8}> <h3 className="font-weight-bold text-right"><small>Provisional:</small></h3></Col>
                                    <Col span={9}><h3 className="font-weight-bold text-right"><NumberFormat value={food.price * this.state.clicks} displayType={'text'} thousandSeparator={','} /> đ</h3></Col>
                                </Row>
                            </Col>
                            <Col span={10}>
                                {cartQuantity === 0 ? 
                                <Button className="button" onClick={()=>{this.addtoCartRequest(food,this.state.clicks)}}>
                                    Add to Basket
                                </Button> :
                                <Button className="button" onClick={()=>{this.updateItemCartRequest(food.foodId,this.state.clicks)}}>
                                    Update my Basket
                                </Button> }
                                
                            </Col>
                        </Row>
                    </Col>

                    
                </Row>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{     
        item: state.cart.findItem,
    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        findCart: (id) => {
            dispatch(findCart(id))
        },
        addtoCart: (id,quantity)=>{
            dispatch(addToCart(id,quantity))
        },
        updateCart: (id,quantity)=>{
            dispatch(updateItemCart(id,quantity))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DishInfoUpdate)
