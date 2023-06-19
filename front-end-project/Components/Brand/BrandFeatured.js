import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle';
import BrandCard from './BrandCard';
import HomeBrandHook from '../../hook/brand/home-brand-hook';
const BrandFeatured = ({ title, btntitle }) => {
  const [brand, loading] = HomeBrandHook();
  console.log(brand);
  return (
    <Container>
      <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          brand.data ? (
            brand.data.slice(0, 5).map((item, index) => {
              return (
                <BrandCard key={index} title={item.name} img={item.image} />
              );
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

export default BrandFeatured;
