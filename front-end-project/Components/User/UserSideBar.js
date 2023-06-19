import React from 'react';
import { Link } from 'react-router-dom';

const UserSideBar = () => {
  return (
    <div className="sidebar">
      <div className="d-flex flex-column">
        <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            ניהול הזמנות{' '}
          </div>
        </Link>
        <Link to="/user/favoriteproducts" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            מוצרים אהובים
          </div>
        </Link>
        <Link to="/user/addresses" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            כתובות אישיות{' '}
          </div>
        </Link>

        <Link to="/user/profile" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            פרופיל אישי{' '}
          </div>
        </Link>
      </div>
    </div>
  );
};
export default UserSideBar;
