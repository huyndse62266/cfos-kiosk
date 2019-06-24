import { combineReducers } from 'redux';
import foods from './foods'
import categories from './categories'
import cart from './cart'
import stores from './stores'

const appReducers = combineReducers({
    foods,
    categories,
    stores,
    cart
});

export default appReducers;