import React, { useEffect, useState } from 'react';
import notify from './../useNotification';
import { loginUser } from '../../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';

const LoginHook = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const res = useSelector((state) => state.authReducer.loginUser);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const validationValues = () => {
    if (email === '') {
      notify('נא למלא אימייל', 'error');
      return;
    }

    if (password === '') {
      notify(' נא למלא סיסמה', 'error');
      return;
    }
  };
  const onSubmit = async () => {
    setIsPress(true);
    setLoading(true);
    await dispatch(
      loginUser({
        email: email,
        password: password,
      })
    );
    setIsPress(false);
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        console.log(res.data);
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.data));

          notify('הכניסה התבצעה בהצלחה', 'success');
          setTimeout(() => {
            window.location.replace('/');
          }, 1500);
        } else {
          if (res.data.message) notify(res.data.message, 'error');
          else if (res.data.errors) notify(res.data.errors[0].msg, 'error');

          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
        setLoading(true);
      }
    }
  }, [loading]);

  return [
    email,
    password,
    loading,
    isPress,
    onChangeEmail,
    onChangePassword,
    onSubmit,
  ];
};

export default LoginHook;
