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
        for(var i = 1; i <= integerRating; i++){
            result.push(<FontAwesomeIcon icon={faStar} className="ml-1" style={{color:'orange'}}/>)
        }
        if(rating - Math.floor(rating) > 0){
            result.push(<FontAwesomeIcon icon={faStarHalfAlt} className="ml-1" style={{color:'orange'}}/>)
        }
        for(var i = 1; i <= (5-rating); i++){
            result.push(<FontAwesomeIcon icon={faStaro} className="ml-1" style={{color:'orange'}}/>)
        }
        return result        
    }
    render() {
        var {food} = this.props;
        console.log(food)
        var {feedbackVMS} = this.props.food;
        console.log(feedbackVMS);
        return (
            <div className="container-fluid">
                <div className="row py-2">
                    <div className="row border-bottom">
                        {/* Cot hinh anh */}
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
                                    <h6 className="font-weight-bold"><NumberFormat value={food.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','}/> đ</h6>
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
                        {/* <div className="col-lg-8">
                            <div className="row d-flex flex-row ">
                                <div className="col-lg-6">
                                    <div className="d-flex flex-row py-2">
                                        <div className="col-lg-1 px-1">
                                            <img src={restaurantLogo} alt="Cinque Terre" className="w-100 h-100 rounded-circle"/>
                                        </div>
                                        <div className="col-lg-11 p-0  text-left">
                                            Nhà hàng Lorem Ipsum
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column px-3">
                                        <div className="row">
                                            <h4 className="text-left">Lorem ipsum dolor sit ame consect adipis ame</h4>
                                        </div>                                
                                        <div className="row py-1">
                                            <h6 className="font-weight-bold">84.000 đ</h6>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-6 px-5 py-2" style={{textAlign:'center', margin:'auto'}}>
                                    <div className="d-inline-flex bg-light px-5 py-2">
                                        <div className="d-flex flex-column">
                                            <div className="row py-1 text-center" >
                                                <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                                <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                                <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                                <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                                <i className="fa fa-star-o pr-1" style={{fontSize:'12px'}}></i>
                                                
                                            </div>
                                            <div className="row py-1">
                                                4.0/5 Rating
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                            <div className="row border-top border-bottom py-2">
                                <div className="row d-flex flex-column round">
                                    <a className="font-weight-bold text-left px-4">Food-court: Lorem ipsum</a>
                                    <a className="px-4 text-left">Address: Ame consect adipis ame ipsum</a>
                                </div>
                            </div>
                            <div className="d-flex flex-column ">
                                <div className="d-flow flow-row text-left p-2 my-2">
                                    <div className="d-flow flow-column">
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                    </div>
                                    Good, excellent foods                              
                                </div>
                                <div className="d-flow flow-row text-left p-2 my-2">
                                    <div className="d-flow flow-column">
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star-o pr-1" style={{fontSize:'12px'}}></i>
                                    </div>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor                                
                                </div>   
                                <div className="d-flow flow-row text-left p-2 my-2">
                                    <div className="d-flow flow-column">
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star-o pr-1" style={{fontSize:'12px'}}></i>
                                    </div>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes                                  
                                </div>   
                                <div className="d-flow flow-row text-left p-2 my-2">
                                    <div className="d-flow flow-column">
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star pr-1" style={{fontSize:'12px',color:'orange'}}></i>
                                        <i className="fa fa-star-o pr-1" style={{fontSize:'12px'}}></i>
                                    </div>
                                    Good, excellent foods                       
                                </div>      
                            </div>    
                        </div> */}

                    </div>

                    
                </div>
                
            </div>
        )
    }
}
