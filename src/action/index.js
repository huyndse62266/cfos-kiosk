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

export const actFetchParentCategoriesRequest = (id) => {
    return dispatch => {
        return callApi(`categories/parent/${id}`,'GET',null).then(res =>{
            dispatch(actFetchCategories(res.data));
        })
    };
}

export const actFetchFoodsRequest = (id) => {
    return dispatch => {
        return callApi(`category/${id}/foods`,'GET',null).then(res =>{
            console.log(res.data)
            dispatch(actFetchFoods(res.data));
        })
    };
}



// export const actCheckoutRequest = () =>{
//     return disp
// }


export const actFetchFoods = (foods) =>{
    return {
        type: Types.FETCH_FOOD,
        foods
    }
}

export const addToCart = (food) =>{
    return {
        type: Types.ADD_TO_CART,
        food
    }
}

export const updateCart = (id) =>{
    return {
        type: Types.UPDATE_ITEM_CART,
        id
    }
}

export const removeCart = (id) =>{
    return {
        type: Types.REMOVE_CART,
        id
    }
}
export const addQuantity = (id) =>{
    return {
        type: Types.ADD_QUANTITY,
        id
    }
}

export const subQuantity = (id) =>{
    return {
        type: Types.SUB_QUANTITY,
        id
    }
}

