import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../images/avatar.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrand } from '../../redux/actions/brandAction';

const AddBrandHook = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const onChangeName = (e) => {
    e.persist();

    setName(e.target.value);
  };

  //when image changed save it.
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const res = useSelector((state) => state.allBrand.brand);

  //save data in Database
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name === '' || selectedFile === null) {
      toast.warning('בבקשה תמלא פרטים', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', selectedFile);

    setLoading(true);
    setIsPress(true);
    await dispatch(createBrand(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setImg(avatar);

      setSelectedFile(null);
      console.log('הסתיים');
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);
    }
  }, [loading]);

  return [
    img,
    name,
    loading,
    isPress,
    handleSubmit,
    onImageChange,
    onChangeName,
  ];
};

export default AddBrandHook;
