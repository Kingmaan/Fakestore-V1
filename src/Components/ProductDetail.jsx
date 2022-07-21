import React, {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector} from "react-redux";
import { selectedProduct} from "../redux/actions/productAction";
import styled from 'styled-components';

const ProductDetail = () => {
    const product = useSelector((state) => state.setProduct)
    const {productId} = useParams();
    const dispatch = useDispatch();
 
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
                                    .catch(err=>{
                                    console.log('Err', err);
        });
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
            return() => {
              dispatch();
            }
    },[productId])

    return(
      <StyledProduct>
        {Object.keys(product).length===0?(
          <div>...Loading</div>
        ):(
          <div className='productCard'>
          <h1 className='productTitle'>{product.title}</h1>
          <h4 className='productCategory'>{product.category}</h4>
          <img className='productImage' alt={product.title} src={product.image}/>
          <p className='productRating'>Rating {product.rating && product.rating.rate}/5</p>
          <i className='productRatingStars'></i>
          <h3 className='productPrice'>${product.price}</h3>
          <p className='productDescription'>{product.description}</p>
          </div>
        )}
      </StyledProduct>
    );
};

export default (ProductDetail);

const StyledProduct = styled.div`

  .productCard{
    
    max-width: 900px;
    max-height: 500px;
    margin: auto;
    justify-content: center;
    align-items: center;
    display: block;
  }

  .productImage{
    height: auto; 
    width: auto; 
    max-width: 300px; 
    max-height: 300px;
    
  }
`; 