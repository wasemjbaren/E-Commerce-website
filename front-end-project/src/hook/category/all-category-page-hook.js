import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllCategory,
  getAllCategoryPage,
} from '../../redux/actions/categoryAction';

const AllCategoryPageHook = () => {
  const dispatch = useDispatch();
  //when first load
  useEffect(() => {
    dispatch(getAllCategory(6));
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  //to get page count
  let pageCount = 0;
  if (category.paginationResult)
    pageCount = category.paginationResult.numberOfPages;

  //when press pagination number.
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
  };

  return [category, loading, pageCount, getPage];
};

export default AllCategoryPageHook;
