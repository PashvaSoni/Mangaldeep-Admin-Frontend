import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
const ProductLayout = () => {
  return (
    <Product__Layout__Container>
        <Outlet/>
    </Product__Layout__Container>
  )
}

export default ProductLayout;

const Product__Layout__Container=styled.div`
  padding:0.5rem;
  border:1px solid blue;
  width:100%;
  height:100%;
`;