import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../images/avatar.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllUserCartItems } from '../../redux/actions/cartAction';
import notify from '../useNotification';

const DeleteCartHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      //await dispatch()
      setLoading(false);
    };

    get();
  }, []);

  const res = useSelector((state) => state.cartReducer.getAllUserCart);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 'success') {
      } else {
      }
    }
  }, [loading]);

  const handleDeleteCart = () => {};
  return [handleDeleteCart];
};

export default DeleteCartHook;
