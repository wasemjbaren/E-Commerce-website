import {
  GET_ERROR,
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETALIS,
  DELETE_PRODUCTS,
  GET_PRODUCT_LIKE,
  UPDATE_PRODUCTS,
} from '../type';
import { useInsertDataWithImage } from '../../hooks/useInsertData';
import { useGetData } from '../../hooks/useGetData';
import useDeleteData from '../../hooks/useDeleteData';
import { useUpdateDataWithImage } from '../../hooks/useUpdateData';

//create product with formatdata
export const createProduct = (formatData) => async (dispatch) => {
  try {
    const res = await useInsertDataWithImage(`/api/v1/products`, formatData);

    dispatch({
      type: CREATE_PRODUCT,
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

//get all products with pagination
export const getAllProducts = (limit) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products?limit=${limit}`);

    dispatch({
      type: GET_ALL_PRODUCTS,
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

//get all prods with num
export const getAllProductsPage = (page, limit) => async (dispatch) => {
  try {
    const res = await useGetData(
      `/api/v1/products?page=${page}&limit=${limit}`
    );

    dispatch({
      type: GET_ALL_PRODUCTS,
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

//get םמק product by id
export const getOneProduct = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products/${id}`);

    dispatch({
      type: GET_PRODUCT_DETALIS,
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

//get  product maybe like .
export const getProductLike = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products?category=${id}`);

    dispatch({
      type: GET_PRODUCT_LIKE,
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

//Delete specific Product.
export const deleteProducts = (id) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/products/${id}`);

    dispatch({
      type: DELETE_PRODUCTS,
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

//update product
export const editProducts = (id, data) => async (dispatch) => {
  try {
    const res = await useUpdateDataWithImage(`/api/v1/products/${id}`, data);

    dispatch({
      type: UPDATE_PRODUCTS,
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

//get all prods with query
export const getAllProductsSearch = (queryString) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products?${queryString}`);

    dispatch({
      type: GET_ALL_PRODUCTS,
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
