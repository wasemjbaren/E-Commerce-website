import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CategoryHeader = () => {
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">הכל</div>
            <div className="cat-text-header">מכשירי חשמל</div>
            <div className="cat-text-header">מחשבים</div>
            <div className="cat-text-header">הנחות</div>

            <div className="cat-text-header">עוד</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
