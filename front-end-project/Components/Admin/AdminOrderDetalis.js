import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CartItem from '../Cart/CartItem';

const AdminOrderDetalis = () => {
  return (
    <div>
      <div className="admin-content-text">הזמנה מס' #55</div>
      <CartItem />
      <CartItem />
      <CartItem />

      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className=" d-flex">
          <div className="admin-content-text py-2"> פרטי לקוח</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: '#555550',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
          >
            שם:
          </div>

          <div
            style={{
              color: '#979797',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
            className="mx-2"
          >
            מוחמד גבארין{' '}
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: '#555550',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
          >
            מספר טלפון:
          </div>

          <div
            style={{
              color: '#979797',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
            className="mx-2"
          >
            0504248902
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: '#555550',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
          >
            אימייל:
          </div>

          <div
            style={{
              color: '#979797',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
            className="mx-2"
          >
            ahmed@gmail.com
          </div>
        </Col>
        <div className=" d-inline px-4 border text-center pt-2">
          סה״כ ٤٠٠٠ جنيه
        </div>
        <div className="d-flex mt-2 justify-content-center">
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-1  text-center px-2 w-50"
          >
            <option value="val">סטאטוס</option>
            <option value="val2">בתהליך</option>
            <option value="val2">הסתיים</option>
            <option value="val2">ביטול</option>
          </select>
          <button className="btn-a px-3 d-inline mx-2 ">שמירה </button>
        </div>
      </Row>
    </div>
  );
};

export default AdminOrderDetalis;
