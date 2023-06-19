import React, { useEffect, useState } from 'react';
import notify from './../useNotification';
import { createNewUser } from '../../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import authReducer from '../../redux/reducers/authReducer';
import { useNavigate } from 'react-router-dom';

const RegisterHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(true);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const res = useSelector((state) => state.authReducer.createUser);

  const validationValues = () => {
    if (name === '') {
      notify('נא למלא שם משתמש', 'error');
      return;
    }
    if (email === '') {
      notify('נא למלא אימייל', 'error');
      return;
    }
    if (phone.length !== 10) {
      notify('נא למלא מספר טלפון תקין', 'error');
      return;
    }

    if (password.length < 6 || password.length > 20) {
      notify(' נא למלא סיסמה מ-6 ל-20 תווים', 'error');
      return;
    }
    if (password !== confirmPassword) {
      notify(' נא למלא סיסמה זהה', 'error');
      return;
    }
  };
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    notify('הזנת כתובת אימייל לא חוקית! ', 'error');

    return false;
  }

  //save data
  const OnSubmit = async () => {
    validationValues();
    ValidateEmail(email);

    await dispatch(
      createNewUser({
        name: name,
        email: email,
        password: password,
        passwordConfirm: confirmPassword,
        phone: phone,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res.data);

        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          notify('ההרשמה התבצעה בהצלחה', 'success');

          setLoading(true);
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        }
      }
    }
  }, [loading]);

  return [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
  ];
};

export default RegisterHook;
