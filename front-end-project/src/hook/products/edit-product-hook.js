import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../hook/useNotification';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrand } from '../../redux/actions/brandAction';

import { getOneCategory } from '../../redux/actions/subcategoryAction';
import {
  editProducts,
  getOneProduct,
} from '../../redux/actions/productsAction';
const AdminEditProductsHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getOneProduct(id));
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    run();
  }, []);

  const item = useSelector((state) => state.allproducts.oneProduct);
  const category = useSelector((state) => state.allCategory.category);
  const brand = useSelector((state) => state.allBrand.brand);
  const subCat = useSelector((state) => state.subCategory.subcategory);

  const onSelect = (selectedList) => {
    setSelectedSubID(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubID(selectedList);
  };
  if (item.data) console.log(item.data.title);

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

  useEffect(() => {
    if (item.data) {
      setImages(item.data.images);
      setProdName(item.data.title);
      setProdDescription(item.data.description);
      setPriceBefore(item.data.price);
      setQty(item.data.quantity);
      setCatID(item.data.category);
      setBrandID(item.data.brand);
      setColors(item.data.availableColors);
    }
  }, [item]);

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
    setCatID(e.target.value);
  };

  useEffect(() => {
    if (CatID != 0) {
      const run = async () => {
        await dispatch(getOneCategory(CatID));
      };
      run();
    }
  }, [CatID]);

  useEffect(() => {
    if (subCat.data) {
      setOptions(subCat.data);
    }
  }, [subCat]);

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
    console.log('handl1');
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

    const convertURLtoFile = async (url) => {
      const response = await fetch(url, { mode: 'cors' });
      const data = await response.blob();
      const ext = url.split(' .').pop();
      const filename = url.split('/').pop();
      const metadata = { type: `image/${ext}` };
      return new File([data], Math.random(), metadata);
    };

    let imgCover;
    if (images[0].length <= 1000) {
      convertURLtoFile(images[0]).then((val) => (imgCover = val));
    } else {
      //convert base64 to file
      imgCover = dataURLtoFile(images[0], Math.random() + '.png');
    }
    let itemImages = [];
    //convert array of  base64 to files
    Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
      if (images[index].length <= 1000) {
        convertURLtoFile(images[index]).then((val) => itemImages.push(val));
      } else {
        itemImages.push(dataURLtoFile(images[index], Math.random() + '.png'));
      }
    });

    const formData = new FormData();
    formData.append('title', prodName);
    formData.append('description', prodDescription);
    formData.append('quantity', qty);
    formData.append('price', priceBefore);
    setTimeout(() => {
      formData.append('imageCover', imgCover);
      itemImages.map((item) => formData.append('images', item));
    }, 1000);

    formData.append('category', CatID);
    formData.append('brand', brandID);
    colors.map((color) => formData.append('availableColors', color));
    selectedSubID.map((id) => formData.append('subcategory', id._id));
    setTimeout(async () => {
      setLoading(true);
      await dispatch(editProducts(id, formData));
      setLoading(false);
    }, 1000);
  };

  const product = useSelector((state) => state.allproducts.updateProducts);

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
        console.log(product);
        if (product.status === 200) {
          notify('העדכון התבצע בהצלחה', 'success');
        } else {
          notify('יש תקלה בעדכון', 'error');
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
    CatID,
    brandID,
  ];
};

export default AdminEditProductsHook;
