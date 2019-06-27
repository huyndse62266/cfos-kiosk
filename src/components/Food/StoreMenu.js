import React, { Component } from 'react'
import FoodItem from './FoodItem'
import apiCaller from '../../utils/ApiCaller'
import {Col, Row, Button} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import './Menu.scss'
import { actFetchFoodsRequest } from '../../action';
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
        apiCaller(`store/${this.props.storeInfo.storeId}/foods/`,'GET',null).then(res => {
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
        var result = <div/>;
        
            if(myFoods.length > 0){
                result = myFoods.map((food, index) => {
                    if(index < 4)
                    return (
                        <Col span={6} className="px-4">
                            <FoodItem key={index} food={food} index={index}/>
                        </Col> 
                    )
                })
            }else{
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
                    {/* <div className="bg-light rounded px-2 py-2 my-1 font-weight-bold">
                        All
                    </div> */}
                </Col>
            </Row>)
        }
        
    }
    buttonMoreDetail(categories){
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
        var { foods} = this.state;
        let a = foods.filter((food) =>{
            return food.fcSubCategoryId == id;
        })
        this.setState({
            foodFilter: a
        })
        // this.props.fetchFoodByCategories(id);
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
        return (
            <Row >
                <Col span={3}className="text-center h-100" style={{margin:'auto', textAlign: 'center'}}>
                    <div style={{marginTop:'40%'}}>
                        <h4>{storeInfo.storeName}</h4>
                        {this.buttonMore()}
                        {this.buttonMoreDetail(storeInfo.categoryVMList)}
                        
                        <Button type="link" onClick={this.checkIsExpand}>{this.state.isExpand === true ? <div>Thu gọn <FontAwesomeIcon icon={faAngleUp} /></div> : <div>Xem thêm <FontAwesomeIcon icon={faAngleDown} /></div> } </Button>
                        {/* {this.renderShowMoreButton()} */}
                    </div>
                </Col>
                <Col span={21} className="d-flex flex-column">
                    <Row >
                        {/* {!foods ? <div/> : 
                        foods.map((food, index) => <Col span={6} className="px-4">
                        <FoodItem key={index} food={food} index={index}/>
                    </Col> )
                    } */}
                        {this.showAllFoods(foods,foodFilter)}
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

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchFoodByCategories: (id) =>{
            dispatch(actFetchFoodsRequest(id))
        },
        fetchAllFood: (id) =>{
            dispatch(actFetchFoodsRequest(id))
        }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StoreMenu);