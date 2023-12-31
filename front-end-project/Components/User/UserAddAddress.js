import React from 'react';
import { Row, Col } from 'react-bootstrap';

const UserAddAddress = () => {
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">הוסף כתובת חדשה</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="שם לכתובת, למשל (בית - עבודה)"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="כתובת מפורטת"
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="מספר הטלפון"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 ">הוסף</button>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddAddress;
