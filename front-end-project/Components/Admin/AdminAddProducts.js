import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import { CompactPicker } from 'react-color';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import add from '../../images/add.png';
import MultiImageInput from 'react-multiple-image-input';
import AdminAddProductsHook from '../../hook/products/add-products-hook';

const AdminAddProducts = () => {
  const [
    onChangeDesName,
    onChangeQty,
    onChangeColor,
    onChangePriceAfter,
    onChangePriceBefore,
    onChangeProdName,
    showColor,
    category,
    brand,
    priceAfter,
    images,
    setImages,
    onSelect,
    onRemove,
    options,
    handleChangeComplete,
    removeColor,
    onSelectCategory,
    handleSubmit,
    onSelectBrand,
    colors,
    priceBefore,
    qty,
    prodDescription,
    prodName,
  ] = AdminAddProductsHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> הוספת מוצר חדש</div>
        <Col sm="8">
          <div className="text-form pb-2"> תמונות המוצר</div>

          <MultiImageInput
            images={images}
            setImages={setImages}
            theme={'light'}
            allowCrop={false}
            max={4}
          />

          <input
            type="text"
            value={prodName}
            onChange={onChangeProdName}
            className="input-form d-block mt-3 px-3"
            placeholder="שם המוצר"
          />
          <textarea
            value={prodDescription}
            onChange={onChangeDesName}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="תיאור המוצר"
          />
          <input
            value={priceBefore}
            onChange={onChangePriceBefore}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="מחיר לפני הנחה"
          />
          <input
            value={priceAfter}
            onChange={onChangePriceAfter}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="מחיר אחרי הנחה המוצר"
          />
          <input
            value={qty}
            onChange={onChangeQty}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="הכמות"
          />
          <select
            name="cat"
            onChange={onSelectCategory}
            id="cat"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">קטיגוריה ראשית</option>

            {category.data
              ? category.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="תת קטיגוריה"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: 'red' }}
          />
          <select
            name="brand"
            id="brand"
            onChange={onSelectBrand}
            className="select input-form-area mt-3 px-2 "
          >
            <option value="val">יצרן</option>

            {brand.data
              ? brand.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <div className="text-form mt-3 ">צבעי המוצר הזמינים</div>
          <div className="mt-1 d-flex">
            {colors.length >= 1
              ? colors.map((color, index) => {
                  return (
                    <div
                      onClick={() => removeColor(color)}
                      key={index}
                      className="color ms-2 border  mt-1"
                      style={{ backgroundColor: color }}
                    ></div>
                  );
                })
              : null}

            <img
              onClick={onChangeColor}
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: 'pointer' }}
            />
            {showColor === true ? (
              <CompactPicker onChangeComplete={handleChangeComplete} />
            ) : null}
          </div>
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

export default AdminAddProducts;
