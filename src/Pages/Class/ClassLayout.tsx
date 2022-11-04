import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
const ClassLayout = () => {
  return (
    <Class__Layout__Container>
      <h1 style={{ textAlign: "center" }}>CLass Listing</h1>
      <Outlet />
    </Class__Layout__Container>
  )
}

export default ClassLayout;

const Class__Layout__Container = styled.div`
  padding:0.5rem;
  width:100%;
  height:100%;
`;