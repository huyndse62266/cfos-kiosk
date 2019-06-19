import React, { Component } from 'react'
import FoodType from './../FoodType'
import {actFetchCategoriesRequest} from '../../action/index'
import RightNavBar from '../RightNavBar'
import MiniCart from '../Cart/MiniCart'
import { connect } from 'react-redux';

class DishScreen extends Component {

    componentWillMount(){
        this.props.fetchAllCategory();
    }

    render() {
        var { categories } = this.props;
        return (
            <div className="container-fluid d-flex flex-row w-100 p-0"> 
                <div class="col-lg-10">
                    {this.showAllCategory(categories)}
                </div>
                <div class="col-lg-2 p-0">
                    <MiniCart/>
                </div>
                
            </div>
        )
    }
    
    showAllCategory(categories){
        var result = null;
        if(categories.length > 0){
            result = categories.map((category, index) => {
                return (<FoodType key={index} category={category} index={index}/>)
            })
        }
        return result;
    }
}


const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategory : () => {
            dispatch(actFetchCategoriesRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DishScreen);