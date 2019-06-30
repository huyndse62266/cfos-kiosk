import React, { Component } from 'react'
import FoodItem from './FoodItem'
import apiCaller from '../../utils/ApiCaller'
import {Col, Row, Button} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import './Menu.scss'
class StoreMenu extends Component {

    constructor(){
        super();
        this.state ={
            isExpand: false,
            foods : [],
            foodFilter : [],
        }
        this.readMore = this.readMore.bind(this);
        this.checkIsExpand = this.checkIsExpand.bind(this);
    }

    componentDidMount(){
        console.log(this.props.storeInfo.storeId)
        apiCaller(`store/${this.props.storeInfo.storeId}/foods/`,'GET',null).then(res => {
            console.log(res.data)
            this.setState({              
                foods: res.data
            })
        })
    }

    checkIsExpand(){
        this.setState({
            isExpand: !this.state.isExpand
        })
    
    }

    showAllFoods(foods,myFoods){
       
            
        
       
    
    }

    readMore(foods,myFoods) {
        if (this.state.isExpand) {
            if(myFoods.length > 0){
                return myFoods.map((food, index) => {
                    if(index > 3)
                        return (
                            <Col span={6} className="px-4">
                                <FoodItem key={index} food={food} index={index} />
                            </Col> 
                        )
                })
            }else{
                return foods.map((food, index) => {
                    if(index > 3)
                        return (
                            <Col span={6} className="px-4">
                                <FoodItem key={index} food={food} index={index} />
                            </Col> 
                        )
                })
            }
                
            
        }
    }
    buttonMore(){
        if (this.state.isExpand) {
            return (<Row>
                <Col span={12} offset={6}>
                    <Button className="store-category" onClick={()=>{this.findAll()}}>All</Button>

                </Col>
            </Row>)
        }
        
    }
    buttonMoreDetail(categories){
        console.log(categories)
        if (this.state.isExpand) {
            
            return categories.map((category, index) => {
                return (
                    <Row>
                        <Col span={12} offset={6}>
                            <Button className="store-category" onClick={()=>{this.findByCategory(category.categoryId)}}>{category.categoryName}</Button>
                        </Col>
                    </Row>
                )
            })
            
        }
    }

    findByCategory = (id) =>{
        console.log(id)
        var { foods} = this.state;
        let a = foods.filter(food => food.storeCategoryId === id)
        this.setState({
            foodFilter: a
        })
    }

    findAll = () =>{
        var { foods} = this.state;
        this.setState({
            foodFilter: foods
        })
    }
    render() {
        var { storeInfo, myFoods } = this.props;
        var { foods, foodFilter} = this.state;
        console.log(foodFilter)
        return (
            <Row >
                <Col span={3}className="text-center h-100" style={{margin:'auto', textAlign: 'center'}}>
                    <div style={{marginTop:'40%'}}>
                        <h4>{storeInfo.storeName}</h4>
                        {this.buttonMore()}
                        {this.buttonMoreDetail(storeInfo.categoryVMList)}
                        
                        <Button type="link" onClick={this.checkIsExpand}>{this.state.isExpand === true ? <div>Thu gọn <FontAwesomeIcon icon={faAngleUp} /></div> : <div>Xem thêm <FontAwesomeIcon icon={faAngleDown} /></div> } </Button>
                    </div>
                </Col>
                <Col span={21} className="d-flex flex-column">
                    <Row >
                        {/* {!foods ? <div/> : 
                        foods.map((food, index) => <Col span={6} className="px-4">
                        <FoodItem key={index} food={food} index={index}/>
                    </Col> )
                    } */}
                        {/* {this.showAllFoods(foods,foodFilter)} */}
                        {!myFoods ? myFoods.map((food, index) => {
                            if(index < 4)
                            return (
                                <Col span={6} className="px-4">
                                    <FoodItem key={index} food={food} index={index}/>
                                </Col> 
                            )
                        }):foods.map((food, index) => {
                            if(index < 4)
                            return (
                                <Col span={6} className="px-4">
                                    <FoodItem key={index} food={food} index={index}/>
                                </Col> 
                            )
                        })}
                    </Row>
                    <span id="more">
                        <Row type="flex" justify="start">
                            {this.readMore(foods,foodFilter)}
                        </Row>
                    </span>
                    
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        myFoods: state.foods
    }
}


export default connect(mapStateToProps, null)(StoreMenu);