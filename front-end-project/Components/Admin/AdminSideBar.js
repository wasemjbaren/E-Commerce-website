import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
  return (
    <div className="sidebar">
      <div className="d-flex flex-column">
        <Link to="/admin/allorders" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            ניהול הזמנות
          </div>
        </Link>
        <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            ניהול מוצרים
          </div>
        </Link>
        <Link to="/admin/addbrand" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            הוסף מותג
          </div>
        </Link>

        <Link to="/admin/addcategory" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            הוסף קטגוריה
          </div>
        </Link>

        <Link to="/admin/addsubcategory" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            הוסף תת קטגוריה
          </div>
        </Link>
        <Link to="/admin/addproduct" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            הוסף מוצר
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
