import * as Types from '../constants/ActionTypes';
import callApi from '../utils/ApiCaller';

export const actFetchCategories = (categories) => {
    return {
        type : Types.FETCH_CATEGORY,
        categories
    }
}



export const actFetchCategoriesRequest = () => {
    return dispatch => {
        return callApi(`categories/`,'GET',null).then(res =>{
            dispatch(actFetchCategories(res.data));
        })
    };
}

export const actFetchFoodsRequest = (id) => {
    return dispatch => {
        return callApi(`category/${id}/foods`,'GET',null).then(res =>{
            dispatch(actFetchFoods(res.data));
        })
    };
}


export const actFetchFoods = (foods) =>{
    return {
        type: Types.FETCH_FOOD,
        foods
    }
}
