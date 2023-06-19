import { CREATE_REVIEW, GET_ALL_REVIEWS_PRODUCT } from '../type';
import { useInsertData } from '../../hooks/useInsertData';
import { useGetData, useGetDataToken } from '../../hooks/useGetData';

//create review
export const createReview = (prodID, body) => async (dispatch) => {
  try {
    const res = await useInsertData(`/api/v1/products/${prodID}/reviews`, body);

    dispatch({
      type: CREATE_REVIEW,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_REVIEW,
      payload: e.response,
    });
  }
};

//get all reviews for one prod
export const getAllReviewsProduct =
  (prodID, page, limit) => async (dispatch) => {
    try {
      const res = await useGetDataToken(
        `/api/v1/products/${prodID}/reviews?page=${page}&limit=${limit}`
      );

      dispatch({
        type: GET_ALL_REVIEWS_PRODUCT,
        payload: res,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ALL_REVIEWS_PRODUCT,
        payload: e.response,
      });
    }
  };
