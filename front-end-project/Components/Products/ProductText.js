import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ViewProductsDetalisHook from '../../hook/products/view-products-detalis-hook';
import AddToCartHook from '../../hook/cart/add-to-cart-hook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductText = () => {
  const { id } = useParams();

  const [item, images, cat, bran] = ViewProductsDetalisHook(id);

  const [colorClick, indexColor, addToCartHandle] = AddToCartHook(id, item);
  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">{cat.name} : </div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {item.title}
            <div className="cat-rate d-inline mx-3">{item.ratingsQuantity}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">יצרן :</div>
          <div className="barnd-text d-inline mx-1">{bran.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {item.availableColors
            ? item.availableColors.map((color, index) => {
                return (
                  <div
                    className="color ms-2 "
                    key={index}
                    onClick={() => colorClick(index, color)}
                    style={{
                      backgroundColor: color,
                      border: indexColor === index ? '3px solid black' : 'none',
                    }}
                  ></div>
                );
              })
            : null}
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">תיאור :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">{item.description}</div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">
            {item.price} שקל
          </div>
          <div
            onClick={addToCartHandle}
            className="product-cart-add px-3 py-3 d-inline mx-3"
          >
            הוספה לעגלה
          </div>
        </Col>
        <ToastContainer />
      </Row>
    </div>
  );
};

export default ProductText;
