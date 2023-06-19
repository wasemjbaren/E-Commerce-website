import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ChoosePayMethoud = () => {
  return (
    <div>
      <div className="admin-content-text pt-5">בחר דרך לתשלום</div>
      <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between ">
          <Col xs="12" className="my-4">
            <input
              name="group"
              id="group1"
              type="radio"
              value="תשלום בכרטיס אשראי"
              className="mt-2"
            />
            <label className="mx-2" for="group1">
              תשלום בכרטיס אשראי
            </label>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs="12" className="d-flex">
            <input
              name="group"
              id="group1"
              type="radio"
              value="תשלום בעת קבלה"
              className="mt-2"
            />
            <label className="mx-2" for="group1">
              תשלום בעת קבלה
            </label>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline   border">34000 שקל</div>
          <div className="product-cart-add px-3 pt-2 d-inline me-2">
            {' '}
            סיום קנייה
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ChoosePayMethoud;
