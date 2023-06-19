import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getOneProduct,
  getProductLike,
} from '../../redux/actions/productsAction';
import mobile from '../../images/mobile.png';
import { getOneCategory } from '../../redux/actions/categoryAction';
import { getOneBrand } from '../../redux/actions/brandAction';

const ViewProductsDetalisHook = (prodID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(prodID));
  }, []);

  const oneProduct = useSelector((state) => state.allproducts.oneProduct);
  const oneCategory = useSelector((state) => state.allCategory.oneCategory);
  const oneBrand = useSelector((state) => state.allBrand.oneBrand);
  const productLike = useSelector((state) => state.allproducts.productLike);

  //to show product item
  let item = [];
  if (oneProduct.data) item = oneProduct.data;
  else item = [];

  useEffect(() => {
    if (item.category) dispatch(getOneCategory(item.category));

    if (item.brand) dispatch(getOneBrand(item.brand));

    if (item.category) dispatch(getProductLike(item.category));
  }, [item]);

  //to view images gallary
  let images = [];
  if (item.images)
    images = item.images.map((img) => {
      return { original: img };
    });
  else {
    images = [{ original: `${mobile}` }];
  }

  //to show category item
  let cat = [];
  if (oneCategory.data) cat = oneCategory.data;
  else cat = [];

  //to show brand item
  let bran = [];
  if (oneBrand.data) bran = oneBrand.data;
  else bran = [];

  let prod = [];
  if (productLike) prod = productLike.data;
  else prod = [];

  return [item, images, cat, bran, prod];
};

export default ViewProductsDetalisHook;
