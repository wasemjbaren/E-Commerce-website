import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHook from '../../hook/auth/login-hook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
import ForgetPasswordHook from '../../hook/auth/forget-password-hook';

const ForgetPasswordPage = () => {
  const [email, loading, onChangeEmail, setLoading, onSubmit] =
    ForgetPasswordHook();

  return (
    <Container style={{ minHeight: '680px' }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="my-3 text-center mx-auto title-login">
            שיחזור סיסמה
          </label>
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="אימייל"
            type="text"
            className="user-input my-3 text-center mx-auto"
          />

          <button onClick={onSubmit} className="btn-login mx-auto mt-2">
            שלח קוד{' '}
          </button>

          <label className="mx-auto my-4 justify-content-center d-flex">
            כבר יש לי סיסמה?{' '}
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <span style={{ cursor: 'pointer' }} className="text-danger">
                לחץ כאן{' '}
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default ForgetPasswordPage;
