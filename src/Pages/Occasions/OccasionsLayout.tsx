import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
const OccasionLayout = () => {
  return (
    <Occasion__Layout__Container>
      <h1 style={{ textAlign: "center" }}>Occasion Listing</h1>
      <Outlet />
    </Occasion__Layout__Container>
  )
}

export default OccasionLayout;

const Occasion__Layout__Container = styled.div`
  padding:0.5rem;
  width:100%;
  height:100%;
`;