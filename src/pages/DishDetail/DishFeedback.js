import React, { Component } from 'react'
import { Avatar,Row,Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NumberFormat from 'react-number-format';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar  as faStaro} from '@fortawesome/free-regular-svg-icons'
import ScrollArea from 'react-scrollbar';

export default class DishFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          show: true
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }
    showRating(rating){
        var result = [];
        var integerRating = Math.floor(rating)
        var i = 1;
        for(i = 1; i <= integerRating; i++){
            result.push(<FontAwesomeIcon icon={faStar} className="ml-1" style={{color:'orange'}}/>)
        }
        if(rating - Math.floor(rating) > 0){
            result.push(<FontAwesomeIcon icon={faStarHalfAlt} className="ml-1" style={{color:'orange'}}/>)
        }
        for(i = 1; i <= (5-rating); i++){
            result.push(<FontAwesomeIcon icon={faStaro} className="ml-1" style={{color:'orange'}}/>)
        }
        return result        
    }
    render() {
        var {food} = this.props;
        var {feedbackVMS} = this.props.food;
        return (
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
                        <Col span={16} className="pl-2 pr-5">
                            <Row>
                                <Col span={12}>
                                    <Row>
                                        <Col span={2}>
                                            <Avatar style={{ backgroundColor: '#87d068' }} icon="user" size="small"/>
                                        </Col>
                                        <Col span={22}>
                                            {food.storeVM.storeName}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <h4 className="text-left">{food.foodName}</h4>
                                    </Row>
                                    <Row>
                                    <h6 className="font-weight-bold"><NumberFormat value={food.price} displayType={'text'} thousandSeparator={','} /> đ</h6>
                                    </Row>
                                </Col>
                                <Col span={12} type="flex" justify="space-around" align="middle">
                                    <div className="px-2 py-3 bg-light rounded" style={{width: '30%'}} >
                                        <Row style={{fontSize:'12px'}}>
                                            {this.showRating(food.rate)}
                                        </Row>
                                        <Row>
                                            {food.rate}/5 Rating
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="border-top border-bottom py-2">
                                <h5 className="font-weight-bold">Food-court: Lorem ipsum</h5>
                                <h5>Address: Ame consect adipis ame ipsum</h5>
                            </Row>
                            <Row className="py-3">
                                {!feedbackVMS ? <span></span> : feedbackVMS.map((feedback, index) => <div className="rounded p-2 my-2 bg-light">
                                    {this.showRating(4)}
                                    <p className="py-1">{feedback.fbContent} </p>
                                </div> )}
                                
                            </Row>
                        </Col>
            </Row>
        )
    }
}
