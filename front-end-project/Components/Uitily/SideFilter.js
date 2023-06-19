import React from 'react';
import { Row } from 'react-bootstrap';
import SidebarSearchHook from '../../hook/search/sidebar-search-hook';

const SideFilter = () => {
  const [category, brand, clickCategory, clickBrand, priceFrom, priceTo] =
    SidebarSearchHook();

  let priceFromValue = localStorage.getItem('priceFrom');
  let priceToValue = localStorage.getItem('priceTo');

  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">קטגוריה</div>
          <div className="d-flex mt-3">
            <input onChange={clickCategory} type="checkbox" value="0" />
            <div className="filter-sub me-2 ">הכל</div>
          </div>

          {category ? (
            category.map((item, index) => {
              return (
                <div key={index} className="d-flex mt-2">
                  <input
                    onChange={clickCategory}
                    type="checkbox"
                    value={item._id}
                  />
                  <div className="filter-sub me-2 ">{item.name}</div>
                </div>
              );
            })
          ) : (
            <h6> אין קטיגוריות</h6>
          )}
        </div>

        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3">היצרן</div>
          <div className="d-flex mt-3">
            <input onChange={clickBrand} type="checkbox" value="0" />
            <div className="filter-sub me-2 ">הכל</div>
          </div>

          {brand ? (
            brand.map((item, index) => {
              return (
                <div key={index} className="d-flex mt-2">
                  <input
                    onChange={clickBrand}
                    type="checkbox"
                    value={item._id}
                  />
                  <div className="filter-sub me-2 ">{item.name}</div>
                </div>
              );
            })
          ) : (
            <h6> אין יצרנים</h6>
          )}
        </div>

        <div className="filter-title my-3">מחיר</div>
        <div className="d-flex">
          <p className="filter-sub my-2">מ:</p>
          <input
            value={priceFromValue}
            onChange={priceFrom}
            className="m-2 text-center"
            type="number"
            style={{ width: '50px', height: '25px' }}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">עד:</p>
          <input
            value={priceToValue}
            onChange={priceTo}
            className="m-2 text-center"
            type="number"
            style={{ width: '50px', height: '25px' }}
          />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
