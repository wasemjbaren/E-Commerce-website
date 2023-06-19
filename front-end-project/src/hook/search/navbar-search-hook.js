import React, { useState } from 'react';
import ViewSearchProductsHook from '../products/view-search-products-hook';
import { useEffect } from 'react';

const NavbarSearchHook = () => {
  const [items, pagination, onPress, getProduct] = ViewSearchProductsHook();
  const [searchWord, setSearchWord] = useState('');

  //when user type word in search .
  const onChangeSearch = (e) => {
    localStorage.setItem('searchWord', e.target.value);
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [searchWord]);
  return [onChangeSearch, searchWord];
};

export default NavbarSearchHook;
