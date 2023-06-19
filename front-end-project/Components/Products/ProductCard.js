import React, { useEffect, useState } from 'react';
import { Card, Col, ToastContainer } from 'react-bootstrap';
import prod1 from '../../images/prod1.png';
import favoff from '../../images/fav-off.png';
import favon from '../../images/fav-on.png';
import notify from '../../hook/useNotification';
import 'react-toastify/dist/ReactToastify.css';
import rate from '../../images/rate.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from '../../redux/actions/wishListAction';

const ProductCard = ({ item, favProd }) => {
  const dispatch = useDispatch();
  const [favImg, setFavImg] = useState(favoff);
  let isFav = favProd.some((fitem) => fitem === item._id);
  console.log(favProd);
  const handleFav = () => {
    if (favProd.some((fitem) => fitem === item._id)) {
      removeFromWishListData();
    } else {
      addToWishListData();
    }
  };

  useEffect(() => {
    if (favProd.some((fitem) => fitem === item._id) === true) {
      setFavImg(favon);
    } else {
      setFavImg(favoff);
    }
  }, [isFav]);

  const res = useSelector((state) => state.wishlistReducer.addWishlist);

  const addToWishListData = async () => {
    await dispatch(
      addProductToWishlist({
        productId: item._id,
      })
    );

    if (res && res.status === 200) {
      notify('הוספה התבצעה בהצלחה', 'success');
    } else {
      notify('ארעה תקלה בהוספה', 'error');
    }
    setFavImg(favon);
  };

  const resRemove = useSelector(
    (state) => state.wishlistReducer.removeProductFromWishlist
  );

  const removeFromWishListData = async () => {
    await dispatch(removeProductFromWishlist(item._id));
    if (resRemove && resRemove.status === 200) {
      notify('המחיקה התבצעה בהצלחה', 'success');
    } else {
      notify('ארעה תקלה במחיקה', 'error');
    }
    setFavImg(favoff);
  };

  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: '100%',
          height: '345px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 2px 2px 0 rgba(151,151,151,0.5)',
        }}
      >
        <Link to={`/products/${item._id}`} style={{ textDecoration: 'none' }}>
          <Card.Img
            style={{ height: '228px', width: '100%' }}
            src={
              item.imageCover.includes('http://localhost:8000/products/')
                ? item.imageCover
                : 'http://localhost:8000/products/' + item.imageCover
            }
          />
        </Link>
        <div className="d-flex justify-content-end mx-2 ">
          <img
            src={favImg}
            alt=""
            onClick={handleFav}
            className="text-center"
            style={{
              height: '24px',
              width: '26px',
              cursor: 'pointer',
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">{item.title}</div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">{item.ratingsQuantity}</div>
              </div>
              <div className="d-flex">
                <div className="card-price">{item.price}</div>
                <div className="card-currency mx-1">₪</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
        <ToastContainer />
      </Card>
    </Col>
  );
};

export default ProductCard;
