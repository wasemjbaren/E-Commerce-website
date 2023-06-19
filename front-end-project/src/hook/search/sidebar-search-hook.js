import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/brandAction';
import ViewSearchProductsHook from '../products/view-search-products-hook';

const SidebarSearchHook = () => {
  const [items, pagination, onPress, getProduct, results] =
    ViewSearchProductsHook();

  const dispatch = useDispatch();
  //when first load
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    get();
  }, []);

  const allCat = useSelector((state) => state.allCategory.category);
  const allBrand = useSelector((state) => state.allBrand.brand);

  //to get category
  let category = [];
  if (allCat.data) category = allCat.data;

  //to get brand
  let brand = [];
  if (allBrand.data) brand = allBrand.data;

  var queryCat = '',
    queryBrand = '';
  const [catChecked, setCatChecked] = useState([]);
  //when user press in category filter
  const clickCategory = (e) => {
    let value = e.target.value;
    if (value === '0') {
      setCatChecked([]);
    } else {
      if (e.target.checked === true) {
        setCatChecked([...catChecked, value]);
      } else if (e.target.checked === false) {
        const newArray = catChecked.filter((e) => e !== value);

        setCatChecked(newArray);
      }
    }
  };

  useEffect(() => {
    queryCat = catChecked.map((val) => 'category[in][]=' + val).join('&');
    localStorage.setItem('catChecked', queryCat);
    setTimeout(() => {
      getProduct();
    }, 500);
  }, [catChecked]);

  const [brandChecked, setBrandChecked] = useState([]);
  //when user press in brand filter
  const clickBrand = (e) => {
    let value = e.target.value;
    if (value === '0') {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([...brandChecked, value]);
      } else if (e.target.checked === false) {
        const newArray = brandChecked.filter((e) => e !== value);
        setBrandChecked(newArray);
      }
    }
  };

  useEffect(() => {
    queryBrand = brandChecked.map((val) => 'brand[in][]=' + val).join('&');

    localStorage.setItem('brandChecked', queryBrand);
    setTimeout(() => {
      getProduct();
    }, 500);
  }, [brandChecked]);

  const [From, setPriceFrom] = useState('');
  const [To, setPriceTo] = useState('');

  const priceFrom = (e) => {
    localStorage.setItem('priceFrom', e.target.value);
    setPriceFrom(e.target.value);
  };

  const priceTo = (e) => {
    localStorage.setItem('priceTo', e.target.value);
    setPriceTo(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [From, To]);

  return [category, brand, clickCategory, clickBrand, priceFrom, priceTo];
};
export default SidebarSearchHook;
