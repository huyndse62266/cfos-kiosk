import React, { Component } from 'react'
import FoodType from './../FoodType'
import {actFetchCategoriesRequest} from '../../action/index'
import RightNavBar from '../RightNavBar'
import { connect } from 'react-redux';
import ImageSwiper from '../ImageSwiper/ImageSwiper'
import MiniCart from '../Cart/MiniCart'



class PromotionScreen extends Component {
    componentWillMount(){
        this.props.fetchAllCategory();
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
    render() {
        var { categories } = this.props;
        return (
            <div className="col-lg-12 py-1">
                <div className="d-flex">
                    <div className="container-fluid d-flex flex-column w-100 p-0">
                        <div className="row">
                            <div className="col-lg-12 align-middle w-100  justify-content-end align-items-center"
                                style={{height: '400px'}}>
                                <div className="col-lg-8 mx-auto"><ImageSwiper/></div>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-lg-10">
                                {this.showAllCategory(categories)}
                            </div>
                            <div class="col-lg-2 p-0">
                                <MiniCart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(PromotionScreen);