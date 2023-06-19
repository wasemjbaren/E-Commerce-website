import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBrand, getAllBrandPage } from '../../redux/actions/brandAction';

const AllBrandHook = () => {
  const dispatch = useDispatch();
  //when first load
  useEffect(() => {
    dispatch(getAllBrand(4));
  }, []);

  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);
  //to get page count
  let pageCount = 0;
  if (brand.paginationResult) pageCount = brand.paginationResult.numberOfPages;

  //when press pagination number.
  const getPage = (page) => {
    dispatch(getAllBrandPage(page));
  };

  return [brand, loading, pageCount, getPage];
};

export default AllBrandHook;
