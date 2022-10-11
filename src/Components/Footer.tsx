import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Footer__Container>
      Footer
    </Footer__Container>
  )
}

export default Footer;

const Footer__Container=styled.div`
  background-color:${(prop)=>prop.theme.color.color3};
`;