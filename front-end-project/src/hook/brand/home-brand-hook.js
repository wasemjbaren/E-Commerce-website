import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand } from '../../redux/actions/brandAction';

const HomeBrandHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //active reducer and action of brand
    dispatch(getAllBrand());
  }, []);

  //get data from reducer (using redux)
  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);

  return [brand, loading];
};

export default HomeBrandHook;
