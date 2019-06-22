import React, { Component } from 'react'
import restaurantLogo from '../../images/khai-niem-nha-hang.jpg'

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
        return (
            <div className="container-fluid">
                <div className="row py-2">
                    <div className="row border-bottom">
                        {/* Cot hinh anh */}
                        <div className="image-container-scroll col-lg-4">
                            <div className="image-wrapper-scroll">
                                <div className="h-25 m-2">
                                    <img src={restaurantLogo} className="img-thumbnail" alt="Cinque Terre" style={{height:"100%", width: '100%'}}/>
                                </div>
                                <div className="h-25 m-2">
                                    <img src={restaurantLogo} className="img-thumbnail" alt="Cinque Terre" style={{height:"100%", width: '100%'}}/>
                                </div>
                                <div className="h-25 m-2">
                                    <img src={restaurantLogo} className="img-thumbnail" alt="Cinque Terre" style={{height:"100%", width: '100%'}}/>
                                </div>
                                <div className="h-25 m-2">
                                    <img src={restaurantLogo} className="img-thumbnail" alt="Cinque Terre" style={{height:"100%", width: '100%'}}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
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
                        </div>

                    </div>

                    
                </div>
                
            </div>
        )
    }
}
