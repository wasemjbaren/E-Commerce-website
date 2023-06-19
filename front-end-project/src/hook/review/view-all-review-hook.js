import React, { useEffect, useState } from 'react';
import { forgetPassword } from '../../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotification';
import {
  createReview,
  getAllReviewsProduct,
} from '../../redux/actions/reviewAction';

const ViewAllReviewHook = (id) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const allReviews = useSelector(
    (state) => state.reviewReducer.AllReviewsProduct
  );

  if (allReviews) {
    console.log(allReviews);
  }

  useEffect(() => {
    setLoading(true);
    dispatch(getAllReviewsProduct(id, 1, 5));
    setLoading(false);
  }, []);

  const onPress = async (page) => {
    await dispatch(getAllReviewsProduct(id, page, 5));
  };

  return [allReviews, onPress];
};
export default ViewAllReviewHook;
