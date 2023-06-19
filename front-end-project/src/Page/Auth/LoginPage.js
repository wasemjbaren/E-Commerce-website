import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHook from '../../hook/auth/login-hook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';

const LoginPage = () => {
  const [
    email,
    password,
    loading,
    isPress,
    onChangeEmail,
    onChangePassword,
    onSubmit,
  ] = LoginHook();

  return (
    <Container style={{ minHeight: '680px' }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="my-3 text-center mx-auto title-login">התחבר</label>
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="אימייל..."
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            value={password}
            onChange={onChangePassword}
            placeholder="סיסמה.."
            type="password"
            className="user-input text-center mx-auto"
          />
          <button onClick={onSubmit} className="btn-login mx-auto mt-4">
            התחבר
          </button>
          <label className=" my-4 my-3 text-center mx-auto">
            אין לך חשבון?
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <span style={{ cursor: 'pointer' }} className="text-danger">
                לחץ כאן
              </span>
            </Link>
          </label>

          <label className=" text-center mx-auto">
            שכחתי סיסמה ?
            <Link to="/user/forget-password" style={{ textDecoration: 'none' }}>
              <span style={{ cursor: 'pointer' }} className="text-danger">
                לחץ כאן
              </span>
            </Link>
          </label>

          {isPress ? (
            isPress === true ? (
              <Spinner
                className="justify-content-center"
                animation="border"
                role="status"
              ></Spinner>
            ) : null
          ) : null}
        </Col>

        {/* <label className="mx-auto my-4  text-center  ">
          <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
            <span style={{ cursor: 'pointer' }} className="text-danger ">
              התחבר מנהל
            </span>
          </Link>

          <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
            <span style={{ cursor: 'pointer' }} className="text-danger mx-3">
              הכניסה למשתמש
            </span>
          </Link>
        </label> */}
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default LoginPage;
