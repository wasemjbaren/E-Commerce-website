import React from 'react';
import UnopDropdown from 'unop-react-dropdown';
import sort from '../../images/sort.png';
const SearchCountResult = ({ title, onClick }) => {
  const handler = () => {};
  const clickMe = (key) => {
    localStorage.setItem('sortType', key);
    onClick();
  };

  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-tile">{title}</div>
      <div className="search-count-text d-flex ">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1">
              <img
                width="20px"
                height="20px"
                className="ms-1"
                src={sort}
                alt=""
              />
              מיין לפי{' '}
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            <div
              onClick={() => clickMe('')}
              className="border-bottom card-filter-item"
            >
              ללא סידור
            </div>

            <div
              onClick={() => clickMe('הכי נמכר')}
              className="border-bottom card-filter-item"
            >
              הכי נמכר
            </div>
            <div
              onClick={() => clickMe('הדירוג הגבוה ביותר')}
              className="border-bottom card-filter-item"
            >
              הדירוג הגבוה ביותר
            </div>
            <div
              onClick={() => clickMe('מחיר מהנמוך לגבוה')}
              className="border-bottom card-filter-item"
            >
              מחיר מהנמוך לגבוה{' '}
            </div>
            <div
              onClick={() => clickMe('מחיר מהגבוה לנמוך')}
              className=" card-filter-item"
            >
              מחיר מהגבוה לנמוך
            </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
