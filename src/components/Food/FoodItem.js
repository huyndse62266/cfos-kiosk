import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar  as faStaro} from '@fortawesome/free-regular-svg-icons'
import { Avatar, Button, Row, Col,Modal  } from 'antd';
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format';
import { addToCart } from '../../action/cart';
import ImageButton from './FoodItemComponent/ImageButton'
import DishDetail from '../../pages/DishDetail/DishDetail'
import 'antd/dist/antd.css';
import './Menu.scss'

class FoodItem extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    addToCartClick = (food) =>{
        this.props.addToCart(food);
    }
    

    showRating(rating){
        var result = [];
        var integerRating = Math.floor(rating)
        var i = 1;      
        for( i = 1; i <= integerRating; i++){
            result.push(<FontAwesomeIcon icon={faStar} />)
        }
        if(rating - Math.floor(rating) > 0){
            result.push(<FontAwesomeIcon icon={faStarHalfAlt} />)
        }
        for( i = 1; i <= (5-rating); i++){
            result.push(<FontAwesomeIcon icon={faStaro} />)
        }
        return result        
    }
    render() {
        var { food } = this.props;
        return (
            <div className="py-2">
                <Row className="py-2">
                    <Col span={3}><Avatar style={{ backgroundColor: '#87d068' }} icon="user" size="small"/></Col>
                    <Col span={16} ><span className="restaurant-title">{food.storeVM.storeName}</span></Col>
                    <Col span={5}>
                        {food.promotion > 0 ? <div className="promotion-tag-wrapper"><span>-{food.promotion }%</span></div>:<div className="promotion-tag-wrapper d-none"><span>-{food.promotion }%</span></div> }
                    </Col>
                </Row>
                <Row>
                    <Col span={24}><ImageButton food={food}/></Col>
                </Row>
                <div className="food-item-wrapper">
                    <Row>
                        <span className="font-weight-bold text-left d-inline-block text-truncate px-2" style={{fontSize: '15px', maxWidth: '90%'}}>{food.foodName}</span>  
                    </Row>
                    <Row className="py-2">
                        <Col span={16} className="px-2">
                            <Row><span className="font-weight-bold" style={{fontSize:'12px'}}>
                            <NumberFormat value={food.price} displayType={'text'} thousandSeparator={','}/> đ</span> 
                            </Row>
                            <Row>
                                <span style={{color:'orange'}} onClick={()=>{this.showModal()}}>{this.showRating(food.rate)}</span>
                                {/* <RatingButton rating={food.rate}/> */}
                            </Row>
                        </Col>
                        <Col span={8}>
                            <button type="button" className="btn btn-success w-75" onClick={()=>{this.addToCartClick(food)}}>Add</button>
                            {/* <Button className="button-add" onClick={()=>{this.addToCartClick(food)}}>Add</Button> */}
                        </Col>
                    </Row>
                </div>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    closable
                    width="80%"
                    bodyStyle={{padding:0, height: '850px'}}
                    footer={null}
                    centered
                    >
                    <DishDetail food={food} selected = {'2'}/>
                </Modal>

            </div>
        )
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (food)=>{
            dispatch(addToCart(food,1))
        }
    }
}
export default connect(null,mapDispatchToProps)(FoodItem);