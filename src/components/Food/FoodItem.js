import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar  as faStaro} from '@fortawesome/free-regular-svg-icons'
import { Avatar, Button, Typography,Card, Row, Col  } from 'antd';
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format';

import { addToCart } from '../../action';
import 'antd/dist/antd.css';


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
          for(var i = 1; i <= rating; i++){
              result.push(<FontAwesomeIcon icon={faStar} />)
          }
          for(var i = 1; i <= (5-rating); i++){
            result.push(<FontAwesomeIcon icon={faStaro} />)
        }
          return result        
      }
    render() {
        var { food } = this.props;
        return (
            <div className="container bg-light px-0 ">
                <Card title={<span>
                    <Row>
                        <Col span={3}><Avatar style={{ backgroundColor: '#87d068' }} icon="user" size="small"/></Col>
                        <Col span={16}><Text style={{fontSize:'12px'}}>{food.storeVM.storeName}</Text></Col>
                        <Col span={5}>
                            {this.renderPromotionTag(food.promotion)}
                        </Col>
                    </Row>
                </span>} bordered={false} headStyle={{padding: 0}} bodyStyle={{padding: 0}} className="w-100">
                    <Row>
                        <Col span={24}><img src={food.foodImage} className="img-thumbnail" alt="Cinque Terre" style={{height:"175px", width: '100%'}}/></Col>
                    </Row>
                    <Row>
                        <a className="font-weight-bold text-left d-inline-block text-truncate px-2" style={{fontSize: '15px', maxWidth: '90%'}}>{food.foodName}</a>  
                    </Row>
                    <Row>
                        <Col span={12} className="px-2">
                            <Row><a className="font-weight-bold" style={{fontSize:'12px'}}>
                            <NumberFormat value={food.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','}/> đ</a> 
                            </Row>
                            <Row style={{fontSize:'12px', color:'orange'}}>
                                {this.showRating(food.rate)}
                            </Row>
                        </Col>
                        <Col span={12} className="text-right">
                            <Button style={{backgroundColor: '#28C76F', color: 'white'}} onClick={()=>{this.addToCartClick(food)}}>Add</Button>
                        </Col>
                    </Row>
                </Card>

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