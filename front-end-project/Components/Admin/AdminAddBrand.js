import React from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import AddBrandHook from '../../hook/brand/add-brand-hook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hook/useNotification';
const AdminAddBrand = () => {
  const [
    img,
    name,
    loading,
    isPress,
    handleSubmit,
    onImageChange,
    onChangeName,
  ] = AddBrandHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">הוספת יצרן</div>
        <Col sm="8">
          <div className="text-form pb-2">תמונת יצרן</div>
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
          </div>{' '}
          <input
            type="text"
            onChange={onChangeName}
            value={name}
            className="input-form d-block mt-3 px-3"
            placeholder="שם היצרן"
          />
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
          <div>
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          notify('הסתיים בהצלחה', 'success')
        )
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default AdminAddBrand;
