import React from 'react'
import styled from 'styled-components'
const Home = () => {
  return (
    <HomeContainer>
      <div className='Home__Content'>
        <h1>Mangaldeep Jewellers</h1>
        <h3>Have a Class</h3>
      </div>
    </HomeContainer>
  )
}

export default Home;

const HomeContainer = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
  align-items:center;

  .Home__Content{
    text-align:center;
    margin:auto auto;
  }
`;