import React from 'react'
import styled from 'styled-components'

export const Home = () => {
  return (
    <Wrapper className='test'></Wrapper>
    )
  };
  
  const Wrapper = styled.section`
  background-color:${({theme})=>theme.colors.bg};
  
  `;
 