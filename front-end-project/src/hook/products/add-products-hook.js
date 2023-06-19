import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hook/useNotification';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand } from '../../redux/actions/brandAction';

import { getOneCategory } from '../../redux/actions/subcategoryAction';
import { createProduct } from '../../redux/actions/productsAction';
const AdminAddProductsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrand());
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const brand = useSelector((state) => state.allBrand.brand);
  const subCat = useSelector((state) => state.subCategory.subcategory);

  const onSelect = (selectedList) => {
    setSelectedSubID(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubID(selectedList);
  };

  const [options, setOptions] = useState([]);

  const [images, setImages] = useState({});

  const [prodName, setProdName] = useState('');
  const [prodDescription, setProdDescription] = useState('');
  const [priceBefore, setPriceBefore] = useState('מחיר לפני הנחה');
  const [priceAfter, setPriceAfter] = useState('מחיר אחרי הנחה');
  const [qty, setQty] = useState('כמות');
  const [CatID, setCatID] = useState('');
  const [subCatID, setsubCatID] = useState([]);
  const [brandID, setBrandID] = useState('');
  const [selectedSubID, setSelectedSubID] = useState([]);

  const [loading, setLoading] = useState(true);

  const onChangeProdName = (event) => {
    event.persist();
    setProdName(event.target.value);
  };

  const onChangeDesName = (event) => {
    event.persist();
    setProdDescription(event.target.value);
  };

  const onChangePriceBefore = (event) => {
    event.persist();
    setPriceBefore(event.target.value);
  };

  const onChangePriceAfter = (event) => {
    event.persist();
    setPriceAfter(event.target.value);
  };

  const onChangeQty = (event) => {
    event.persist();
    setQty(event.target.value);
  };

  const onChangeColor = (event) => {
    event.persist();
    setShowColor(!showColor);
  };

  //to show hide color picker
  const [showColor, setShowColor] = useState(false);
  //to store all picked color
  const [colors, setColors] = useState([]);
  //when choose new color save him.
  const handleChangeComplete = (color) => {
    setColors([...colors, color.hex]);

    setShowColor(!showColor);
    console.log(color.hex);
  };
  //remove color
  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };

  const onSelectCategory = async (e) => {
    if (e.target.value !== 0) await dispatch(getOneCategory(e.target.value));
    setCatID(e.target.value);
  };

  useEffect(() => {
    if (CatID !== 0) {
      if (subCat.data) {
        console.log(subCat.data);
        setOptions(subCat.data);
      }
    }
  }, [CatID]);

  const onSelectBrand = (e) => {
    setBrandID(e.target.value);
  };

  //base64 to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  //to save data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      CatID === 0 ||
      prodName === '' ||
      prodDescription === '' ||
      images.length <= 0 ||
      priceBefore <= 0
    ) {
      notify('בבקשה מלה פרטים', 'warn');
      return;
    }

    //convert base64 to file
    const imgCover = dataURLtoFile(images[0], Math.random() + '.png');

    //convert array of  base64 to files
    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
      (item, index) => {
        return dataURLtoFile(images[index], Math.random() + '.png');
      }
    );

    const formData = new FormData();
    formData.append('title', prodName);
    formData.append('description', prodDescription);
    formData.append('quantity', qty);
    formData.append('price', priceBefore);
    formData.append('imageCover', imgCover);
    formData.append('category', CatID);
    formData.append('brand', brandID);
    itemImages.map((item) => formData.append('images', item));
    colors.map((color) => formData.append('availableColors', color));
    selectedSubID.map((id) => formData.append('subcategory', id._id));

    setLoading(true);
    await dispatch(createProduct(formData));
    setLoading(false);
  };

  const product = useSelector((state) => state.allproducts.products);

  useEffect(() => {
    if (loading === false) {
      setCatID(0);
      setColors([]);
      setImages([]);
      setProdName('');
      setProdDescription('');
      setPriceBefore('מחיר לפני הנחה');
      setPriceAfter('מחיר אחרי הנחה');
      setQty('כמות');
      setBrandID(0);
      setSelectedSubID([]);
      setTimeout(() => setLoading(true), 1500);

      if (product) {
        if (product.status === 201) {
          notify('ההוספה התבצעה בהצלחה', 'success');
        } else {
          notify('יש תקלה בהוספה', 'error');
          return;
        }
      }
    }
  }, [loading]);

  return [
    onChangeDesName,
    onChangeQty,
    onChangeColor,
    onChangePriceAfter,
    onChangePriceBefore,
    onChangeProdName,
    showColor,
    category,
    brand,
    priceAfter,
    images,
    setImages,
    onSelect,
    onRemove,
    options,
    handleChangeComplete,
    removeColor,
    onSelectCategory,
    handleSubmit,
    onSelectBrand,
    colors,
    priceBefore,
    qty,
    prodDescription,
    prodName,
  ];
};

export default AdminAddProductsHook;
