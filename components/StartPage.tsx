import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

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
  0% {
    transform: translateX(-100px);
    opacity: 1;
  }
  100% {
    transform: translateX(100px);
    opacity: 0;
  }
`
const ani3 = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`
const Container = styled.div<{active: boolean}>`
  background-color: black;
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
  animation: ${props => props.active ? '' : ani3};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`
const Box1 = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`
const Subbox = styled.div<{active: boolean}>`
  animation: ${props => props.active ? ani1 : ani2};
  animation-duration: 2s;
  animation-fill-mode: forwards;
`
const Subbox2 = styled(Subbox)<{active: boolean}>``

const StartPage = () => {

  const [clock, setClock] = useState(true); // Subbox 애니메이션
  const [clock2, setClock2] = useState(true); // Container 애니메이션

  setTimeout(()=>{
    setClock(false);
  }, 3000);

  setTimeout(()=>{
    if(clock === false){ setClock2(false); }
  }, 1000)

  return (
    <Container active={clock2}>
      <Box1>
        <Subbox active={clock}>We</Subbox>
        <Subbox active={clock}>Create</Subbox>
        <Subbox active={clock}>Knotters</Subbox>
        <Subbox2 active={clock}>
            <FontAwesomeIcon icon={faSpinner}/>
        </Subbox2>
      </Box1>
    </Container>
  )
}

export default StartPage