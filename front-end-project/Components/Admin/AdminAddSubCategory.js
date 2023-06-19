import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddSubcategoryHook from '../../hook/subcategory/add-subcategory-hook';

const AdminAddSubCategory = () => {
  const [
    id,
    name,
    loading,
    category,
    subcategory,
    handleChange,
    handleSubmit,
    onChangeName,
  ] = AddSubcategoryHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">הוספת תת-קטגוריה</div>
        <Col sm="8">
          <input
            type="text"
            value={name}
            onChange={onChangeName}
            className="input-form d-block mt-3 px-3"
            placeholder="שם התת קטגוריה"
          />
          <select
            name="category"
            id="cat"
            className="select mt-3 px-2 "
            onChange={handleChange}
          >
            <option value="0"> בחר קטגוריה</option>

            {category
              ? category.data?.map((item, index) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {' '}
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            עדכון
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddSubCategory;
