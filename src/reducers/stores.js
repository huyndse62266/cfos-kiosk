import * as Types from './../constants/ActionTypes';

var initialState = [];


const stores = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_STORE:
            state = action.stores;
            console.log(state)
            return [...state];
        default: return [...state];
    }
};

export default stores;