import { CREATE_REVIEW, GET_ALL_REVIEWS_PRODUCT } from '../type';

const inital = {
  createReview: [],
  AllReviewsProduct: [],
  loading: true,
};
const reviewReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {
        ...state,
        createReview: action.payload,
        loading: false,
      };

    case GET_ALL_REVIEWS_PRODUCT:
      return {
        ...state,
        AllReviewsProduct: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reviewReducer;
