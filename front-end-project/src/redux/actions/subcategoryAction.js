import { GET_ERROR, CREATE_SUBCATEGORY, GET_SUBCATEGORY } from '../type';
import { useInsertData } from '../../hooks/useInsertData';
import { useGetData } from '../../hooks/useGetData';

//create Subcategory
export const createSubCategory = (data) => async (dispatch) => {
  try {
    const res = await useInsertData(`/api/v1/subcategories`, data);

    dispatch({
      type: CREATE_SUBCATEGORY,
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
//get subcategory deppenend id
export const getOneCategory = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories/${id}/subcategories`);
    dispatch({
      type: GET_SUBCATEGORY,
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
