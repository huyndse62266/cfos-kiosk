import * as Types from './../constants/ActionTypes';

var initialState = [];


const categories = (state = initialState, action) => {
    var index = -1;
    var { id, category } = action;
    switch (action.type) {
        case Types.FETCH_CATEGORY:
            state = action.categories;
            return [...state];
        default: return [...state];
    }
};

export default categories;