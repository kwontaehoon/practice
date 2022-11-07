import React, { useEffect } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  background-image: url('/images/bg1.jpg');
  background-size: 100% 100%;
`
const Main = styled.div`
  border: 2px solid white;
  height: 300px;
`

const About = () => {
  
  return (
    <Container className='content'>
      <Main></Main>
    </Container>
  )
}

export default About