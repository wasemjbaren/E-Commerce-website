import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProducts,
  getAllProductsPage,
  getAllProductsSearch,
} from '../../redux/actions/productsAction';

const ViewSearchProductsHook = () => {
  let limit = 12;
  const dispatch = useDispatch();

  //run after  rendering the page
  const getProduct = async () => {
    getStorage();
    sortData();

    let pricefromString = '',
      pricetoString = '';
    if (priceFrom == '' || priceFrom <= 0) {
      pricefromString = '';
    } else {
      pricefromString = `price[gt]=${priceFrom}`;
    }

    if (priceTo == '' || priceTo <= 0) {
      pricetoString = '';
    } else {
      pricetoString = `price[lte]=${priceTo}`;
    }

    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${queryBrand}&${pricefromString}&${pricetoString}`
      )
    );
  };
  useEffect(() => {
    getProduct();
  }, []);

  const allProducts = useSelector((state) => state.allproducts.allProducts);

  let items = [];
  let pagination = [];
  let results = 0;
  try {
    if (allProducts.data) items = allProducts.data;
    else items = [];
  } catch (e) {}
  try {
    if (allProducts.paginationResult)
      pagination = allProducts.paginationResult.numberOfPages;
    else pagination = [];
  } catch (e) {}

  try {
    if (allProducts.results) results = allProducts.results;
    else results = 0;
  } catch (e) {}

  let word = '',
    queryCat = '',
    queryBrand = '',
    priceFrom = '',
    priceTo = '';

  let pricefromString = '',
    pricetoString = '';
  //run after  click to pagination
  const onPress = async (page) => {
    getStorage();
    sortData();

    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${queryBrand}&${pricefromString}&${pricetoString}`
      )
    );
  };
  const getStorage = () => {
    if (localStorage.getItem('searchWord') != null)
      word = localStorage.getItem('searchWord');

    if (localStorage.getItem('catChecked') != null)
      queryCat = localStorage.getItem('catChecked');

    if (localStorage.getItem('brandChecked') != null)
      queryBrand = localStorage.getItem('brandChecked');

    if (localStorage.getItem('priceTo') != null)
      priceTo = localStorage.getItem('priceTo');
    if (localStorage.getItem('priceFrom') != null)
      priceFrom = localStorage.getItem('priceFrom');

    if (priceFrom == '' || priceFrom <= 0) {
      pricefromString = '';
    } else {
      pricefromString = `price[gt]=${priceFrom}`;
    }

    if (priceTo == '' || priceTo <= 0) {
      pricetoString = '';
    } else {
      pricetoString = `price[lte]=${priceTo}`;
    }
  };

  //when user choose sort  type
  let sortType = '',
    sort;
  const sortData = () => {
    if (localStorage.getItem('sortType') !== null) {
      sortType = localStorage.getItem('sortType');
    } else {
      sortType = '';
    }

    if (sortType === 'מחיר מהנמוך לגבוה') sort = '+price';
    else if (sortType === 'מחיר מהגבוה לנמוך') sort = '-price';
    else if (sortType === 'הכי נמכר') sort = '-sold';
    else if (sortType === 'הדירוג הגבוה ביותר') sort = '-ratingsQuantity';
    else if (sortType === '') sort = '';
  };

  return [items, pagination, onPress, getProduct, results];
};

export default ViewSearchProductsHook;
