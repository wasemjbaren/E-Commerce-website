import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CartCheckout from '../../Components/Cart/CartCheckout';
import CartItem from '../../Components/Cart/CartItem';
import GetAllUserCartHook from '../../hook/cart/get-all-user-cart-hook';

const CartPage = () => {
  const [loading, itemsNum, cartItems, totalCartPrice] = GetAllUserCartHook();
  console.log(cartItems[0]);

  return (
    <Container style={{ minHeight: '670px' }}>
      <Row>
        <div className="cart-title mt-4">העגלה</div>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="9">
          {cartItems.length >= 1 ? (
            cartItems.map((item, index) => {
              return <CartItem index={index} item={item} />;
            })
          ) : (
            <h4> אין מוצרים בעגלה </h4>
          )}
        </Col>

        <Col xs="6" md="3">
          <CartCheckout totalCartPrice={totalCartPrice} />
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
