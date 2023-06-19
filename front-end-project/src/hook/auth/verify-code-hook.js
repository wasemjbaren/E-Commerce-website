import React, { useEffect, useState } from 'react';
import { verifyPassword } from '../../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotification';

const VerifyPasswordHook = () => {
  const dispatch = useDispatch();

  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.authReducer.verifyPassword);

  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const onSubmit = async () => {
    if (code === '') {
      notify('נא לרשום את הקוד', 'error');
      return;
    }

    setLoading(true);
    await dispatch(verifyPassword({ resetCode: code }));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.data.status === 'Success') {
          notify('קוד תקין', 'success');
          setTimeout(() => {
            window.location.replace('/user/reset-password');
          }, 1500);
        } else {
          notify('קוד לא תקין', 'error');
          return;
        }
      }
    }
  }, [loading]);
  return [code, loading, onChangeCode, onSubmit];
};

export default VerifyPasswordHook;
