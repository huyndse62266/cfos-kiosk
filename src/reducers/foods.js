import * as Types from '../constants/ActionTypes';

var initialState = [];


const foods = (state = initialState, {type, action}) => {
    switch (type) {
        case Types.FETCH_FOOD:
                console.log(action);
            return  action;
        default: return [...state];
    }
};

export default foods;