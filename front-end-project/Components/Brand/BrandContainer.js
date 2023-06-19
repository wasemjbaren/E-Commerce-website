import React from 'react';
import BrandCard from './BrandCard';
import { Container, Row, Spinner } from 'react-bootstrap';

const BrandContainer = ({ data, loading }) => {
  return (
    <Container>
      <div className="admin-content-text mt-2 ">כל היצרנים</div>
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return <BrandCard key={index} img={item.image} />;
            })
          ) : (
            <h4> אין יצרנים</h4>
          )
        ) : (
          <div className="justify-content-center d-flex">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
      </Row>
    </Container>
  );
};

export default BrandContainer;
