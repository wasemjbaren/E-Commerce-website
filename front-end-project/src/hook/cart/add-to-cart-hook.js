import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../images/avatar.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrand } from '../../redux/actions/brandAction';
import { addProductToCart } from '../../redux/actions/cartAction';
import notify from '../useNotification';

const AddToCartHook = (prdID, item) => {
  const dispatch = useDispatch();

  const [indexColor, setIndexColor] = useState('');
  const [colorText, setColorText] = useState('');
  const [loading, setLoading] = useState(true);

  const colorClick = (index, color) => {
    setIndexColor(index);
    setColorText(color);
  };

  //add prod to cart
  const addToCartHandle = async () => {
    if (item.availableColors.length >= 1) {
      if (colorText === '') {
        notify('בבקשה בחר צבע', 'error');
        return;
      }
    } else {
      setColorText('');
    }
    setLoading(true);

    await dispatch(
      addProductToCart({
        productId: prdID,
        color: colorText,
      })
    );

    setLoading(false);
  };

  const res = useSelector((state) => state.cartReducer.addToCart);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200 && localStorage.getItem('user')) {
        notify('המוצר נוסף בהצלחה', 'success');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        notify('ארעה תקלה בהוספה', 'error');
        return;
      }
    }
  }, [loading]);

  return [colorClick, indexColor, addToCartHandle];
};

export default AddToCartHook;
