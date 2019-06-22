import * as Types from '../constants/ActionTypes';

var initialState = [];


const foods = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_FOOD:
            state = action.foods;
            return [...state];
        default: return [...state];
    }
};

export default foods;