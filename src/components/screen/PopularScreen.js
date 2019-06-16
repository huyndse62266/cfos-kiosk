import React, { Component } from 'react'
import FoodType from './../FoodType'
import {actFetchCategoriesRequest} from '../../action/index'
import { connect } from 'react-redux';


 class PopularScreen extends Component {


    componentDidMount(){
        this.props.fetchAllCategory();
    }

    
    
    render() {
        var { categories } = this.props;
        return (
            <div className="container-fluid d-flex flex-column w-100 p-0"> 
                {this.showAllCategory(categories)}
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
export default connect(mapStateToProps, mapDispatchToProps)(PopularScreen);