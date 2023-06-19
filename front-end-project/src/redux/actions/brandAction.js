import { GET_ALL_BRAND, GET_ERROR, GET_ONE_BRAND, CREATE_BRAND } from '../type';
import { useGetData } from '../../hooks/useGetData';
import { useInsertDataWithImage } from '../../hooks/useInsertData';

//get all brand
export const getAllBrand = (limit) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/brands?limit=${limit}`);

    dispatch({
      type: GET_ALL_BRAND,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error ' + e,
    });
  }
};
//get all brand by page (pagination)
export const getAllBrandPage = (page) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/brands?limit=4&page=${page}`);

    dispatch({
      type: GET_ALL_BRAND,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error ' + e,
    });
  }
};

//get one brand
export const getOneBrand = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/brands/${id}`);

    dispatch({
      type: GET_ONE_BRAND,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error ' + e,
    });
  }
};

//create brand
export const createBrand = (formData) => async (dispatch) => {
  try {
    const res = await useInsertDataWithImage(`/api/v1/brands`, formData);

    dispatch({
      type: CREATE_BRAND,
      payload: res,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: 'Error ' + e,
    });
  }
};
