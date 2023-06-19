import React, { useEffect, useState } from 'react';
import { forgetPassword } from '../../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotification';
import { createReview } from '../../redux/actions/reviewAction';

const AddRateHook = (id) => {
  const dispatch = useDispatch();
  const [rateText, setRateText] = useState('');
  const [rateValue, setRateValue] = useState(0);

  const [loading, setLoading] = useState(true);

  // const res = useSelector((state) => state.authReducer.forgetPassword);

  const onChangeRateText = (e) => {
    setRateText(e.target.value);
  };

  const onChangeRateValue = (val) => {
    setRateValue(val);
  };

  var user = '';
  if (localStorage.getItem('user') !== null)
    user = JSON.parse(localStorage.getItem('user'));

  const onSubmit = async () => {
    if (rateText === '') {
      notify('בבקשה כתוב התרשמותך', 'error');
      return;
    }
    if (rateValue === 0) {
      notify('בבקשה בחר דירוג', 'error');
      return;
    }

    setLoading(true);

    await dispatch(
      createReview(id, {
        review: rateText,
        rating: rateValue,
      })
    );

    setLoading(false);
  };

  const res = useSelector((state) => state.reviewReducer.createReview);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);

        if (res.status && res.status === 201) {
          notify('ההוספה התבצעה בהצלחה', 'success');
        }

        if (res.status && res.status === 403) {
          notify('מנהל לא יכול להוסיף תגובה', 'error');
          return;
        }

        if (res.status && res.status === 400) {
          notify('אין אפשרות להוסיף התרשמותך עוד פעם', 'error');
          return;
        }
      }
    }
  }, [loading]);

  return [
    rateText,
    rateValue,
    onChangeRateText,
    onChangeRateValue,
    user,
    onSubmit,
  ];
};

export default AddRateHook;
