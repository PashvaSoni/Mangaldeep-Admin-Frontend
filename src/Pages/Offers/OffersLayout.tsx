import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
const OffersLayout = () => {
  return (
    <Offers__Layout__Container>
        <Outlet/>
    </Offers__Layout__Container>
  )
}

export default OffersLayout;

const Offers__Layout__Container=styled.div`
  padding:0.5rem;
  width:100%;
  height:max-content;
`;