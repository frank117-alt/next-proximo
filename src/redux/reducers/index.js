import { combineReducers } from 'redux';
import categories from './categories';
import blog from './blog';
import auth from './auth/auth';

export default combineReducers({
    categories,
    auth,
    blog

})