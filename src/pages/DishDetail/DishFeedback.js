import React, { Component } from 'react'
import { Avatar,Row,Col } from 'antd';
import Rating from 'react-rating'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NumberFormat from 'react-number-format';
import { faMapMarkerAlt, faStoreAlt} from '@fortawesome/free-solid-svg-icons'
import { faStar  as faStaro, faCommentDots} from '@fortawesome/free-regular-svg-icons'
import ScrollArea from 'react-scrollbar';
import './DishInfo.css'

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
    render() {
        var {food} = this.props;    
        var {feedbackVMS} = food;
        return (
            <Row type="flex" justify="start">
                <Col span={8} className="info-feedback-container">
                    <div className="feedback-info">
                        <h3><FontAwesomeIcon icon={faStaro} className="avarage-star-icon"/>{food.rate}</h3>
                        <h6 className="rate-count">Trên tổng 35 đánh giá</h6>
                        <Rating               
                            emptySymbol="fa fa-star-o fa-2x"
                            fullSymbol="fa fa-star fa-2x"
                            initialRating={food.rate}
                            readonly
                            className="star-rate-style"/>
                        <h6 className="number-feedback"><FontAwesomeIcon icon={faCommentDots}/> 15 ý kiến</h6>
                    </div>
                    <div className="food-info">
                        <h5 className="food-name">{food.foodName}</h5>
                        <h6 className="store-name"><FontAwesomeIcon icon={faMapMarkerAlt}/> Quán Dì Mai</h6>
                        <h6 className="food-price"><NumberFormat value={food.price} displayType={'text'} thousandSeparator={','}/> đ</h6>
                    </div>
                    <div className="food-court-info">
                        <h6 className="food-court-title">
                            <FontAwesomeIcon icon={faStoreAlt}/> Khu ẩm thực
                        </h6>
                        <h5 className="food-court-name">Aeon CitiMart Gò Vấp</h5>
                        <h6 className="food-court-address">672 Quang Trung, Phường 11, Gò Vấp</h6>
                    </div>
                </Col>        
                <Col span={16} className="feedback-container">
                    <Row>
                        <h6>Đánh giá (15)</h6>
                    </Row>
                    <Row>
                        {!feedbackVMS ? <span></span> : feedbackVMS.map((feedback, index) => <Row className="feedback-wrapper" type="flex" justify="start">
                            <Col className="icon-wrapper"><FontAwesomeIcon icon={faCommentDots}/></Col>
                            <Col className="feedback-content"><Rating               
                                emptySymbol="fa fa-star-o fa-2x"
                                fullSymbol="fa fa-star fa-2x"
                                initialRating={feedback.rate}
                                readonly
                                style={{fontSize:'8px',color:'orange'}}/>
                            <h6 className="py-1">{feedback.fbContent} </h6></Col>
                        </Row> )}
                    </Row>
                </Col>        
            </Row>
        )
    }
}
