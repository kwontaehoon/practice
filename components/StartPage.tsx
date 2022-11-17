import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';

const ani1 = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    transform: translate(-100px, 0px);
    opacity: 1;
  }
`
const ani2 = keyframes`
  0% {}
  100% {
    transform: translate(100px, 0px);
    opacity: 1;
  }
`
const Container = styled.div`
  background-color: green;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 999;
  opacity: 1;
  border: 4px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Box1 = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  div{
    border: 1px solid black;
    animation: ${ani1} 1s;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    
  }
`

const StartPage = () => {

  const [clock, setClock] = useState(true);

  setTimeout(()=>{
    setClock(false);
  }, 1000);

  return (
    <Container>
      <Box1>
        <div clock={clock}>We</div>
        <div clock={clock}>Create</div>
        <div clock={clock}>Knotters</div>
      </Box1>
    </Container>
  )
}

export default StartPage