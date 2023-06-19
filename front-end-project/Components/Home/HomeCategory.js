import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import HomeCategoryHook from '../../hook/category/home-category-hook';
import SubTiltle from '../Uitily/SubTiltle';
import CategoryCard from './../Category/CategoryCard';

const HomeCategory = () => {
  const [category, loading, colors] = HomeCategoryHook();

  return (
    <Container>
      <SubTiltle title="קטגוריות" btntitle="עוד" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          category.data ? (
            category.data.slice(0, 5).map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[index]}
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

export default HomeCategory;
