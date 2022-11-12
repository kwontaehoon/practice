import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  background-image: url('/images/bg1.jpg');
  background-size: 100% 100%;
  padding-top: 180px;
`
const Main = styled.div`
  height: 60%;
`
const Box = styled.div`
  height: 33.5%;
  font-size: 50px;
  display: flex;
  align-items: center;
  padding-left: 60px;
  font-family: 'GangwonEduPowerExtraBoldA';
  padding-top: 20px;
`

const About = () => {
  
  return (
    <Container className='content'>
      <Main>
          <Box>D-Transformation</Box>
          <Box>Digital Marketing</Box>
          <Box>Data Analytics</Box>
      </Main>
    </Container>
  )
}

export default About