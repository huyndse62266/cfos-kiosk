import * as Types from './../constants/ActionTypes';

var initialState = [];


const categories = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_CATEGORY:
            state = action.categories;
            return [...state];
        default: return [...state];
    }
};

export default categories;