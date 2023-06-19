import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hook/useNotification';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { createSubCategory } from '../../redux/actions/subcategoryAction';

const AddSubcategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!navigator.onLine) {
      notify('אין חיבור באנטרנט', 'error');
      return;
    }
    dispatch(getAllCategory());
  }, []);

  const [id, setID] = useState('0');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  const category = useSelector((state) => state.allCategory.category);
  const subcategory = useSelector((state) => state.subCategory.subcategory);

  //on change dropdown menu
  const handleChange = (e) => {
    setID(e.target.value);
  };

  //on change name

  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  //on save data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!navigator.onLine) {
      notify('אין חיבור באנטרנט', 'error');
      return;
    }
    if (id === '0') {
      notify('בבקשה תמלא פרטים', 'warn');
      return;
    }

    if (name === '') {
      notify('בבקשה תמלא פרטים', 'warn');
      return;
    }

    setLoading(true);
    await dispatch(createSubCategory({ name, category: id }));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setName('');
      setID(0);
      if (subcategory) {
        console.log(subcategory);

        if (subcategory.status === 201) {
          notify('הוספה התבצעה בהצלחה', 'success');
        } else {
          notify('יש בעיה בהוספה', 'warn');
        }

        setLoading(true);
      }
    }
  }, [loading]);

  return [
    id,
    name,
    loading,
    category,
    subcategory,
    handleChange,
    handleSubmit,
    onChangeName,
  ];
};

export default AddSubcategoryHook;
