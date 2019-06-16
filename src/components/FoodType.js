import React, { Component } from 'react'
import FoodItem from './FoodItem'
import { actFetchFoodsRequest } from '../action';
import { connect } from 'react-redux';

class FoodType extends Component {

    constructor(){
        super();
        this.state ={
            isExpand: false
        }
        this.readMore = this.readMore.bind(this);
        this.checkIsExpand = this.checkIsExpand.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllFood(this.props.category.id);
    }

    checkIsExpand(){
        this.setState({
            isExpand: !this.state.isExpand
        })
    
    }

    showAllFoods(foods){
        var result = null;
        console.log('===========');
        console.log(foods)
        console.log('===========');
        if(foods.length > 0){
            result = foods.map((food, index) => {
                return (<FoodItem key={index} food={food} index={index}/>)
            })
        }
        return result;
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
        var { category,foods } = this.props;
        console.log(category.id)
        return (
            <div>
                <div className="col-lg-12 d-flex flex-row p-0">
                    <div className="col-lg-2" style={{textAlign:'center', margin:'auto'}}>
                        <div>
                            <h4>{category.categoryName}</h4>
                            <button type="button" className="btn p-0" onClick={this.checkIsExpand} id="myBtn">{this.state.isExpand === true ? 'Thu gọn' : ' Xem thêm'} <i className="fa fa-angle-down" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="row float-left">
                            {this.showAllFoods(foods)}
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
const mapStateToProps = state => {
    return {
        foods: state.foods
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllFood : (id) => {
            dispatch(actFetchFoodsRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoodType);