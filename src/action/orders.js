import * as Types from '../constants/ActionTypes';
import callApi from '../utils/ApiCaller';


export const actFetchOrderRequest = (id) => {
    return dispatch => {
        return callApi(`orders/${id}`,'GET',null).then(res =>{
            console.log(res.data)
            dispatch(fetchOrder(res.data));
        })
    };
}

export const fetchOrder = (order) =>{
    return {
        type: Types.FETCH_ORDER,
        order
    }
}
