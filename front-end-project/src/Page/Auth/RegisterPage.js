import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RegisterHook from '../../hook/auth/register-hook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [
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
  ] = RegisterHook();

  return (
    <Container style={{ minHeight: '680px' }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">רשום חשבון חדש</label>
          <input
            value={name}
            onChange={onChangeName}
            placeholder="שם המשתמש"
            type="text"
            className="user-input mt-3 text-center mx-auto"
          />
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="אימייל"
            type="text"
            className="user-input my-3 text-center mx-auto"
          />

          <input
            value={phone}
            onChange={onChangePhone}
            placeholder="מספר טלפון"
            type="text"
            className="user-input my-3 mt-1 text-center mx-auto"
          />

          <input
            value={password}
            onChange={onChangePassword}
            placeholder="סיסמה"
            type="password"
            className="user-input text-center mx-auto"
          />

          <input
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            placeholder="אישור סיסמה"
            type="password"
            className="user-input my-3 text-center mx-auto"
          />
          <button onClick={OnSubmit} className="btn-login mx-auto mt-4">
            רישום
          </button>
          <label className="mx-auto my-4">
            כבר יש לך חשבון?{' '}
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <span style={{ cursor: 'pointer' }} className="text-danger">
                לחץ כאן{' '}
              </span>
            </Link>
          </label>
        </Col>
        <ToastContainer />
      </Row>
    </Container>
  );
};

export default RegisterPage;
