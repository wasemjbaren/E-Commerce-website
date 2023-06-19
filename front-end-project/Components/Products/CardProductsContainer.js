import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProductWitshList } from '../../redux/actions/wishListAction';

const CardProductsContainer = ({ products, title, btntitle, pathText }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [favProd, setFavProd] = useState([]);

  const res = useSelector((state) => state.wishlistReducer.userWishlist);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProductWitshList());
      setLoading(false);
    };

    get();
  }, []);

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        setFavProd(res.data.map((item) => item._id));
      }
    }
  }, [loading]);

  return (
    <Container>
      {products ? (
        <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}
      <Row className="my-2 d-flex justify-content-between">
        {products
          ? products.map((item, index) => (
              <ProductCard favProd={favProd} key={index} item={item} />
            ))
          : null}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
