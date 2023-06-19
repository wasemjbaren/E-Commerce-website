import React, { useEffect, useState } from 'react';
import { resetPassword, verifyPassword } from '../../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotification';

const ResetPasswordHook = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.authReducer.resetPassword);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = async () => {
    if (password === '') {
      notify('נא לרשום את הסיסמה', 'error');
      return;
    }

    if (password !== confirmPassword) {
      notify('נא לרשום סיסמאות זיהות', 'error');
      return;
    }

    setLoading(true);
    await dispatch(
      resetPassword({
        email: localStorage.getItem('user-email'),
        newPassword: password,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);

        if (res.status === 200) {
          notify('שינוי סיסמה התבצע בהצלחה', 'success');
          setTimeout(() => {
            window.location.replace('/login');
            localStorage.removeItem('user-email');
          }, 1500);
        } else if (res.status !== 200) {
          notify('קוד לא מאומת', 'error');
          console.log(res);
          return;
        }
      }
    }
  }, [loading]);
  return [
    password,
    confirmPassword,
    loading,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit,
  ];
};

export default ResetPasswordHook;
