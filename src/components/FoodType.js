import React, { Component } from 'react'
import FoodItem from './FoodItem'
export default class FoodType extends Component {

    constructor(){
        super();
        this.state ={
            isExpand: false
        }
        this.readMore = this.readMore.bind(this);
        this.checkIsExpand = this.checkIsExpand.bind(this);
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
            <div>
                <div className="col-lg-12 d-flex flex-row p-0">
                    <div className="col-lg-2" style={{textAlign:'center', margin:'auto'}}>
                        <div>
                            <h4>{this.props.name}</h4>
                            <button type="button" className="btn p-0" onClick={this.checkIsExpand} id="myBtn">{this.state.isExpand === true ? 'Thu gọn' : ' Xem thêm'} <i className="fa fa-angle-down" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <div className="col-lg-10 py-3">
                        <div className="row">
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
        )
    }
}
