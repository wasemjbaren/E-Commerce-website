import React, { useState } from 'react';
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import logo from '../../images/logo.png';
import login from '../../images/login.png';
import cart from '../../images/cart.png';
import NavbarSearchHook from '../../hook/search/navbar-search-hook';
import { useEffect } from 'react';
import { getLoggedUser } from '../../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import GetAllUserCartHook from '../../hook/cart/get-all-user-cart-hook';
const NavBarLogin = () => {
  let word = '';
  // const dispatch = useDispatch();
  const [onChangeSearch, searchWord] = NavbarSearchHook();
  const [user, setUser] = useState('');

  if (localStorage.getItem('searchWord') != null)
    word = localStorage.getItem('searchWord');

  useEffect(() => {
    if (localStorage.getItem('user'))
      setUser(JSON.parse(localStorage.getItem('user')));
    //dispatch(getLoggedUser());
  }, []);

  //const res = useSelector((state) => state.authReducer.currentUser);

  const logOut = () => {
    localStorage.removeItem('user');

    setUser('');
    window.location.reload();
  };

  const [loading, itemsNum, cartItems] = GetAllUserCartHook();

  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" alt="a" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            value={word}
            onChange={onChangeSearch}
            type="search"
            placeholder="חפש..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            {user !== '' ? (
              <NavDropdown title={user.name} id="basic-nav-dropdown">
                {user.role === 'admin' ? (
                  <NavDropdown.Item href="/admin/allproducts">
                    מנהל
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="/user/profile">
                    פרופיל
                  </NavDropdown.Item>
                )}

                <NavDropdown.Divider />

                <NavDropdown.Item onClick={logOut} href="/">
                  יציאה
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-3 justify-content-center"
              >
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: 'white' }}>כניסה</p>
              </Nav.Link>
            )}

            <Nav.Link
              href="/cart"
              className="nav-text position-relative d-flex mt-3 justify-content-center"
              style={{ color: 'white' }}
            >
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: 'white' }}>עגלה</p>

              <span class="position-absolute top-10 start-0 translate-middle badge rounded-pill bg-danger">
                {itemsNum || 0}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
