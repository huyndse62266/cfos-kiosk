import React, { Component } from 'react'
import FoodItem from './FoodItem'
import apiCaller from '../utils/ApiCaller'
import {Col, Row} from 'antd'
import { actFetchFoodsRequest } from '../action';
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

    componentWillMount(){
        apiCaller(`category/${this.props.category.id}/foods`,'GET',null).then(res => {
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

    showAllFoods(foods){
        var result = null;
        if(foods.length > 0){
            result = foods.map((food, index) => {
                if(index < 4)
                    return (<FoodItem key={index} food={food} index={index}/>)
            })
        }
        return result;
    }

    readMore(foods) {
        if (this.state.isExpand) {
     
            
            return foods.map((food, index) => {
                if(index > 3)
                    return (
                        <FoodItem key={index} food={food} index={index}/>
)
            })
            
        }
    }
    render() {
        var { category } = this.props;
        var { foods } = this.state;
        console.log(this.state.foods)
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
                            <span id="more" className="w-100 float d-flex flex-row">
                                {this.readMore(foods)}
                            </span>
                            
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}
// const mapStateToProps = state => {
//     return {
//         foods: state.foods
//     }
// }

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         fetchAllFood : (id) => {
//             dispatch(actFetchFoodsRequest(id));
//         }
//     }
// }
export default connect(null, null)(FoodType);