// src/components/Product.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import axios from 'axios';

const Product = ({ match }) => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const productId = match.params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`/api/products/${productId}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;