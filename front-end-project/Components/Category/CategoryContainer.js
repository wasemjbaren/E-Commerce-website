import React, { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import CategoryCard from './../Category/CategoryCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';

const CategoryContainer = ({ data, loading }) => {
  const colors = ['#F4DBA4', '#0034FF', '#55CFDF', '#0034FF', '#FFD3E8'];

  return (
    <Container>
      <div className="admin-content-text mt-2 ">כל הקטגוריות</div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[Math.floor(Math.random() * 5) + 1]}
                />
              );
            })
          ) : (
            <h4> אין קטגוריות</h4>
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

export default CategoryContainer;
