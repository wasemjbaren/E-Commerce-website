import { GET_ERROR, CREATE_SUBCATEGORY, GET_SUBCATEGORY } from '../type';

const inital = {
  subcategory: [],
  loading: true,
};
const subcategoryReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_SUBCATEGORY:
      return {
        ...state,
        subcategory: action.payload,
        loading: false,
      };

    case GET_SUBCATEGORY:
      return {
        subcategory: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        loading: true,
        subcategory: action.payload,
      };

    default:
      return state;
  }
};

export default subcategoryReducer;
