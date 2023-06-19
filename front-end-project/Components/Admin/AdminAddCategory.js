import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCategoryHook from '../../hook/category/add-category-hook';

const AdminAddCategory = () => {
  const [
    img,
    name,
    loading,
    isPress,
    handleSubmit,
    onImageChange,
    onChangeName,
  ] = AddCategoryHook();

  // All the logics on add-category-hook

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">הוספת קטגוריה חדשה</div>
        <Col sm="8">
          <div className="text-form pb-2">תמונת הקטגוריה</div>
          <div>
            <label for="upload-photo">
              <img
                src={img}
                alt="ad"
                height="100px"
                width="120px"
                style={{ cursor: 'pointer' }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          <input
            onChange={onChangeName}
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="שם קטגוריה"
          />
          <ToastContainer position="top-left" />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            עדכון
          </button>
        </Col>
      </Row>

      {isPress ? (
        loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <h4>הסתיים</h4>
        )
      ) : null}
    </div>
  );
};

export default AdminAddCategory;
