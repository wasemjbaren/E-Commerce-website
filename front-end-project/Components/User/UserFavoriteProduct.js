import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from './../Products/ProductCard';
import Pagination from '../Uitily/Pagination';
import CardProductsContainer from '../Products/CardProductsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getProductWitshList } from '../../redux/actions/wishListAction';
const UserFavoriteProduct = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProductWitshList());
      setLoading(false);
    };

    get();
  }, []);

  const res = useSelector((state) => state.wishlistReducer.userWishlist);

  useEffect(() => {
    if (loading === false) {
      if (res) setItems(res.data);
    }
  }, [loading]);
  return (
    <div>
      <div className="admin-content-text pb-4">רשימת מועדפים</div>
      <Row className="justify-content-start">
        {items.length <= 0 ? (
          <h4>אין מוצרים אהובים</h4>
        ) : (
          <CardProductsContainer products={items} title="" btntitle="" />
        )}
      </Row>
      <Pagination />
    </div>
  );
};

export default UserFavoriteProduct;
