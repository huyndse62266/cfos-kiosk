import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar  as faStaro} from '@fortawesome/free-regular-svg-icons'
import { Avatar, Button, Typography,Card, Row, Col  } from 'antd';
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format';
import { addToCart } from '../../action';
import 'antd/dist/antd.css';
import './Menu.scss'

const { Text } = Typography;

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
    renderPromotionTag = (rate) =>{
       
        if(rate > 0)
            return(<div className="text-center rounded py-1" style={{backgroundColor:'#32CCBC', color:'white'}}>
                <a className="font-weight-bold">-{rate}%</a>
        </div>)
    }

    showRating(rating){
        var result = [];
        var integerRating = Math.floor(rating)
        for(var i = 1; i <= integerRating; i++){
            result.push(<FontAwesomeIcon icon={faStar} />)
        }
        if(rating - Math.floor(rating) > 0){
            result.push(<FontAwesomeIcon icon={faStarHalfAlt} />)
        }
        for(var i = 1; i <= (5-rating); i++){
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
                    <Col span={16}><Text style={{fontSize:'12px'}}>{food.storeVM.storeName}</Text></Col>
                    <Col span={5}>
                        {this.renderPromotionTag(food.promotion)}
                    </Col>
                </Row>
                <Row>
                    <Col span={24}><img src={food.foodImage} className="img-thumbnail" alt="Cinque Terre" style={{height:"175px", width: '100%'}}/></Col>
                </Row>
                <div className="food-item-wrapper">
                    <Row>
                        <a className="font-weight-bold text-left d-inline-block text-truncate px-2" style={{fontSize: '15px', maxWidth: '90%'}}>{food.foodName}</a>  
                    </Row>
                    <Row className="py-2">
                        <Col span={16} className="px-2">
                            <Row><a className="font-weight-bold" style={{fontSize:'12px'}}>
                            <NumberFormat value={food.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','}/> đ</a> 
                            </Row>
                            <Row style={{fontSize:'12px', color:'orange'}}>
                                {this.showRating(food.rate)}
                            </Row>
                        </Col>
                        <Col span={8} className="h-100">
                            <Button className="button-add" onClick={()=>{this.addToCartClick(food)}}>Add</Button>
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (food)=>{
            dispatch(addToCart(food))
        }
    }
}
export default connect(null,mapDispatchToProps)(FoodItem);