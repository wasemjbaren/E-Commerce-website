import { color } from '@mui/system';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
const HomeCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  const colors = ['#FFD3E8', '#F4DBA5', '#55CFDF', '#0034FF', '#FFD3E8'];

  return [category, loading, colors];
};

export default HomeCategoryHook;
