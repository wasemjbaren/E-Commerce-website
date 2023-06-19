import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHook from '../../hook/auth/login-hook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
import ResetPasswordHook from '../../hook/auth/reset-password-hook';

const ResetPasswordPage = () => {
  const [
    password,
    confirmPassword,
    loading,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit,
  ] = ResetPasswordHook();

  return (
    <Container style={{ minHeight: '680px' }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="my-3 text-center mx-auto title-login">
            סיסמה חדשה
          </label>
          <input
            value={password}
            onChange={onChangePassword}
            placeholder=" הסיסמה החדשה"
            type="password"
            className="user-input my-3 text-center mx-auto"
          />

          <input
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            placeholder="אישור הסיסמה"
            type="password"
            className="user-input my-3 text-center mx-auto"
          />

          <button onClick={onSubmit} className="btn-login mx-auto mt-2">
            שינוי{' '}
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default ResetPasswordPage;
