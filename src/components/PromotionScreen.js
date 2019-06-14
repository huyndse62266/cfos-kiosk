import React, { Component } from 'react'
import FoodItem from './FoodItem'
import ImageSwiper from './ImageSwiper/ImageSwiper'
import $ from 'jquery';


export default class PromotionScreen extends Component {
    constructor(){
        super();
        this.state ={
            isExpand: false
        }
        this.readMore = this.readMore.bind(this);
        this.checkIsExpand = this.checkIsExpand.bind(this);
    }
    componentDidMount(){
        // $('#myModal').on('shown.bs.modal', function () {
        //     $('#myInput').trigger('focus')
        //     if ($('#dots').css("display") == "none") {
        //         $('#dots').css("display", "inline");
        //         $('#myBtn').html("Xem thêm");
        //         $('#more').css("display", "none");
        //     } else {
        //         $('#dots').css("display", "none");
        //         $('#myBtn').html("Ẩn");
        //         $('#more').css("display", "inline");
        //     }
        // })
    }

    checkIsExpand(){
        this.setState({
            isExpand: !this.state.isExpand
        })
        console.log(this.state.isExpand);
    }

    readMore() {
        if (this.state.isExpand) {
            return (
                <span id="more">
                    <div className="row">
                        <FoodItem/>
                        <FoodItem/>
                        <FoodItem/>
                        <FoodItem/>
                    </div>
                    <div className="row">
                        <FoodItem/>
                        <FoodItem/>
                        <FoodItem/>
                        <FoodItem/>
                    </div>
                    <div className="row">
                        <FoodItem/>
                        <FoodItem/>
                        <FoodItem/>
                        <FoodItem/>
                    </div>
                </span>
            )
        }
    }
    render() {
        return (
            <div className="container-fluid d-flex flex-column w-100 p-0"> 
                <div className="col-lg-12 align-middle w-100  justify-content-end align-items-center py-3">
                    <div className="col-lg-8 mx-auto"><ImageSwiper/> </div>
                </div>      
                <div className="row">
                    <div className="col-lg-12 d-flex flex-row p-0">
                        <div className="col-lg-2" style={{textAlign:'center', margin:'auto'}}>
                            <div>
                                <h4>Cơm</h4>
                                <button type="button" className="btn p-0" onClick={this.checkIsExpand} id="myBtn">Xem thêm <i className="fa fa-angle-down" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className="col-lg-10 py-3">
                            <div className="d-flex flex-row">
                                <FoodItem/>
                                <FoodItem/>
                                <FoodItem/>
                                <FoodItem/>
                            </div>
                            <span id="dots">
                            
                            </span>
                            {this.readMore()}
                        </div>
                        
                        
                        
                    </div>    
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex flex-row p-0">
                        <div className="col-lg-2" style={{textAlign:'center', margin:'auto'}}>
                            <div>
                                <h4>Trà sữa</h4>
                                <button type="button" className="btn p-0" onClick={this.checkIsExpand} id="myBtn">Xem thêm <i className="fa fa-angle-down" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className="col-lg-10 py-3">
                            <div className="d-flex flex-row">
                                <FoodItem/>
                                <FoodItem/>
                                <FoodItem/>
                                <FoodItem/>
                            </div>
                            <span id="dots">
                            
                            </span>
                            {this.readMore()}
                        </div>
                        
                        
                        
                    </div>    
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex flex-row p-0">
                        <div className="col-lg-2" style={{textAlign:'center', margin:'auto'}}>
                            <div>
                                <h4>Gà rán</h4>
                                <button type="button" className="btn p-0" onClick={this.checkIsExpand} id="myBtn">Xem thêm <i className="fa fa-angle-down" aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div className="col-lg-10 py-3">
                            <div className="d-flex flex-row">
                                <FoodItem/>
                                <FoodItem/>
                                <FoodItem/>
                                <FoodItem/>
                            </div>
                            <span id="dots">
                            
                            </span>
                            {this.readMore()}
                        </div>
                        
                        
                        
                    </div>    
                </div>
            </div>
        )
    }
}
