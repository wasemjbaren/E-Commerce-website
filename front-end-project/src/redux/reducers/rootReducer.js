import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import brandReducer from './brandReducer';
import subcategoryReducer from './subcategoryReducer';
import productsReducer from './productsReducer';
import authReducer from './authReducer';
import reviewReducer from './reviewReducer';
import wishlistReducer from './wishListReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  subCategory: subcategoryReducer,
  allproducts: productsReducer,
  authReducer: authReducer,
  reviewReducer: reviewReducer,
  wishlistReducer: wishlistReducer,
  cartReducer: cartReducer,
});
