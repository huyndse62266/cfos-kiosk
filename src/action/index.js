import * as Types from '../constants/ActionTypes';
import callApi from '../utils/ApiCaller';

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
export const actFetchStoreCategoriesRequest = (id) => {
    return dispatch => {
        return callApi(`stores/${id}`,'GET',null).then(res =>{
            dispatch(actFetchStores(res.data));
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

export const actFetchOrderRequest = (id) => {
    return dispatch => {
        return callApi(`orders/${id}`,'GET',null).then(res =>{
            console.log(res.data)
            dispatch(fetchOrder(res.data));
        })
    };
}


export const actCheckoutRequest = (cartItems, total) =>{
    var result = null;

    var orderDetail = cartItems.map((cartItem) =>{
        return{
            foodId: cartItem.foodId,
            quantity: cartItem.cartQuantity,
            storeID: cartItem.storeVM.storeId,
            totalPrice: cartItem.price * cartItem.cartQuantity,
        }
    })
    var order ={
        "customerId": null,
        "orderDetails": orderDetail,
        "totalOrder": total
    }
    console.log(JSON.stringify(order))
    return dispatch =>{
        return callApi(`orders/orders/submit-order`,'POST',JSON.stringify(order)).then(res =>{
            dispatch(fetchOrder(res.data));
        })
    }
}

export const actFetchCategories = (categories) => {
    return {
        type : Types.FETCH_CATEGORY,
        categories
    }
}

export const actFetchStores = (stores) => {
    return {
        type : Types.FETCH_STORE,
        stores
    }
}


export const actFetchFoods = (foods) =>{
    return {
        type: Types.FETCH_FOOD,
        action : foods
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

export const checkout = () =>{
    return {
        type: Types.CHECKOUT
    }
}

export const fetchOrder = (orders) =>{
    console.log(orders)
    return {
        type: Types.FETCH_ORDER,
        orders
    }
}