import React, { useEffect, useState } from 'react';
import { forgetPassword } from '../../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotification';

const ForgetPasswordHook = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.authReducer.forgetPassword);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async () => {
    if (email === '') {
      notify('נא לרשום את האימיל', 'error');
      return;
    }
    localStorage.setItem('user-email', email);

    setLoading(true);
    await dispatch(forgetPassword({ email }));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.data.status === 'Success') {
          console.log(res);
          notify('נשלח לך קוד', 'success');
          setTimeout(() => {
            window.location.replace('/user/verify-code');
          }, 1500);
        } else {
          notify('האימייל לא קיים', 'error');
          return;
        }
      }
    }
  }, [loading]);
  return [email, loading, onChangeEmail, setLoading, onSubmit];
};

export default ForgetPasswordHook;
