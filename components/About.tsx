import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  background-image: url('/images/bg1.jpg');
  background-size: 100% 100%;
  padding-top: '20%';
`
const Header = styled.div`
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid white;
`
const Logo = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const TabBar = styled(Logo)``

const Main = styled.div`
  padding-top: 200px;
  height: 50%;
  border: 2px solid white;
`
const Box = styled.div`
  height: 33.5%;
  font-size: 40px;
  display: flex;
  align-items: center;
  padding-left: 60px;
  font-family: 'GangwonEduPowerExtraBoldA';
`

const About = () => {
  
  return (
    <Container className='content'>
      {/* <Main>
          <Box>D-Transformation</Box>
          <Box>Digital Marketing</Box>
          <Box>Data Analytics</Box>
      </Main> */}
    </Container>
  )
}

export default About