import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import rate from '../../images/rate.png';
import Pagination from '../Uitily/Pagination';
import RateItem from './RateItem';
import RatePost from './RatePost';
import { useParams } from 'react-router-dom';
import ViewAllReviewHook from '../../hook/review/view-all-review-hook';
const RateContainer = ({ rateAvg, rateQty }) => {
  const { id } = useParams();
  const [allReviews, onPress] = ViewAllReviewHook(id);

  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">דירוגים</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
          <div className="rate-count d-inline p-1 pt-2">
            ({`${rateQty} דירוגים`})
          </div>
        </Col>
      </Row>
      <RatePost />

      {allReviews.data
        ? allReviews.data.map((review, index) => {
            return <RateItem key={index} review={review} />;
          })
        : null}

      <Pagination
        pageCount={
          allReviews.paginationResult
            ? allReviews.paginationResult.numberOfPages
            : 0
        }
      />
    </Container>
  );
};

export default RateContainer;
