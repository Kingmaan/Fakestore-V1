import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductComponent = () => {
    
    const products = useSelector((state) => state.setAllProducts.products);
    const renderList = products.map((product) =>{
    const {id, title, category, rating, price, image, count, qty} = product; 
        
        return(
        <StyledProductComponent>
            <div className='productComponent'>
                <Link to={`/${id}`} style={{textDecoration: 'none'}}>
                <div className='productImage'>
                    <img src={image} alt={title} height='400px' width='400px'/>
                </div>

                <div className='productText'>
                    <h1 className='productTitle'>{title}</h1>
                    <h4 className='productCategory'>{category}</h4>
                    <p className='productRating'>Rating {rating && rating.rate}/5</p>
                        <i className='productRatingStars'></i>
                    <h3 className='productPrice'>${price}</h3>
                </div>
                </Link>
            </div>
        </StyledProductComponent>
        );
    });
    return(
        <StyledProductComponent>
            <div className='grid'>{renderList}</div>
        </StyledProductComponent>
    )
}
export default ProductComponent;

const StyledProductComponent = styled.div`
    
    .grid{
        margin: 3% 10%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        grid-auto-flow: row;
        gap: 25px 20px;
    }
    
    img {
        display: flex;
        max-width: 100%;
        height: auto;
    }

    .productComponent {
        min-height: 100%;
        border-radius: 8%;
        margin: 2%;
        flex-direction: column;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 10%;

        &:hover{
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        }
    } 

    .productText{
        text-decoration: none;
        color: black;
    }
`;