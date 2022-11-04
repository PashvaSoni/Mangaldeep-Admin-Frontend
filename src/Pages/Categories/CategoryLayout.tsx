import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const CategoryLayout = () => {
  return (
    <Category__Layout__Container>
        <h1 style={{textAlign:"center"}}>Category Listing</h1>
        <Outlet/>
    </Category__Layout__Container>
  )
}

export default CategoryLayout;

const Category__Layout__Container=styled.div`
  padding:0.5rem;
  width:100%;
  height:100%;
`;