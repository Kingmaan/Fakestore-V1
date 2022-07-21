import React, {useEffect, useState} from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import ProductComponent from "../Components/ProductComponent.jsx";
import axios from 'axios';
import { setProducts } from "../redux/actions/productAction";
import styled from 'styled-components';

const ProductPage = () => {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products/')
        .catch((err)=>{
            console.log('Err', err);
        });
        dispatch(setProducts(response.data));
    };
        
    useEffect(()=>{
        fetchProducts();
    }, []);

    return(
        <StyledProductPage>
             <ProductComponent/>
        </StyledProductPage>
    );
};

export default ProductPage;
const StyledProductPage = styled.div``;