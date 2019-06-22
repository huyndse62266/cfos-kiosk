import React, { Component } from 'react'
import FoodItem from './FoodItem'
import apiCaller from '../../utils/ApiCaller'
import {Col, Row} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

class FoodType extends Component {

    constructor(){
        super();
        this.state ={
            isExpand: false,
            foods : []
        }
        this.readMore = this.readMore.bind(this);
        this.checkIsExpand = this.checkIsExpand.bind(this);
    }

    componentDidMount(){
        
        if(this.props.type === 'promotion'){
            apiCaller(`category/${this.props.category.categoryId}/foods/promotion`,'GET',null).then(res => {
                this.setState({
                    foods: res.data
                })
            })
        }else if(this.props.type === 'popular'){
            apiCaller(`category/${this.props.category.categoryId}/foods`,'GET',null).then(res => {
                this.setState({
                    foods: res.data
                })
            })
        }else if(this.props.type === 'dishes' || this.props.type === 'drink'){
            apiCaller(`category/${this.props.category.categoryId}/foods`,'GET',null).then(res => {
                this.setState({
                    foods: res.data
                })
            })
        }
        

    }

    checkIsExpand(){
        this.setState({
            isExpand: !this.state.isExpand
        })
    
    }

    showAllFoods(foods){
        var result = null;
        if(foods.length > 0){
            result = foods.map((food, index) => {
                if(index < 4)
                return (
                    <Col span={6} className="px-4">
                        <FoodItem key={index} food={food} index={index}/>
                    </Col> 
                )
            })
        }
        return result;
    }

    readMore(foods) {
        if (this.state.isExpand) {
     
            
            return foods.map((food, index) => {
                if(index > 3)
                    return (
                        <Col span={6} className="px-4">
                            <FoodItem key={index} food={food} index={index}/>
                        </Col> 
                    )
            })
            
        }
    }
    render() {
        var { category } = this.props;
        var { foods } = this.state;
        return (
            <Row type="flex" justify="space-around" align="middle">
                <Col span={3}className="text-center h-100" style={{margin:'auto', textAlign: 'center'}}>
                    <div>
                        <h4>{category.categoryName}</h4>
                        <button type="button" className="btn p-0 btn-light" onClick={this.checkIsExpand} id="myBtn">{this.state.isExpand === true ? 'Thu gọn' : ' Xem thêm'} <FontAwesomeIcon icon={faAngleDown} /></button>
                    </div>
                </Col>
                <Col span={21} className="d-flex flex-column">
                    <Row >
                        {this.showAllFoods(foods)}
                    </Row>
                    <span id="more">
                        <Row type="flex" justify="start">
                            {this.readMore(foods)}
                        </Row>
                    </span>
                    
                </Col>
            </Row>
        )
    }
}


export default connect(null, null)(FoodType);