import { GET_ERROR, ADD_TO_CART, GET_ALL_USER_CART } from '../type';
import { useInsertData } from '../../hooks/useInsertData';
import { useGetDataToken } from '../../hooks/useGetData';

//add to cart
export const addProductToCart = (body) => async (dispatch) => {
  try {
    const res = await useInsertData(`/api/v1/cart`, body);

    dispatch({
      type: ADD_TO_CART,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: ADD_TO_CART,
      payload: e.response,
    });
  }
};

//get all user  cart
export const getAllUserCartItems = () => async (dispatch) => {
  try {
    const res = await useGetDataToken('/api/v1/cart');
    console.log(res);
    dispatch({
      type: GET_ALL_USER_CART,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_USER_CART,
      payload: e.response,
    });
  }
};
