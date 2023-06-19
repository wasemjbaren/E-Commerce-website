import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, USER_WISHLIST } from '../type';
import { useInsertData } from '../../hooks/useInsertData';
import useDeleteData from '../../hooks/useDeleteData';
import { useGetDataToken } from '../../hooks/useGetData';

export const addProductToWishlist = (body) => async (dispatch) => {
  try {
    const res = await useInsertData('/api/v1/wishlist', body);

    dispatch({
      type: ADD_TO_WISHLIST,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: 'Error ' + e.response,
    });
  }
};

export const removeProductFromWishlist = (prodID) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/wishlist/${prodID}`);

    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: e.response,
    });
  }
};

export const getProductWitshList = () => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/wishlist`);

    dispatch({
      type: USER_WISHLIST,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: USER_WISHLIST,
      payload: e.response,
    });
  }
};
