import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';

const ani1 = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`


const Container = styled.div`
  width: 70%;
  height: 500px;
  position: absolute;
  z-index: 700;
  display: flex;
`
const LeftBox = styled.div`
  border: 3px solid black;
  width: 50%;
  height: 100%;
  background-color: teal;
  padding: 30px;
  animation: ${ani1} 2s;
  animation-fill-mode: forwards;
`
const RightBox = styled.div`
  border: 3px solid black;
  width: 50%;
  height: 100%;
  background-color: aquamarine;
  animation: ${ani1} 2s;
  animation-fill-mode: forwards;
`

const AniPage = () => {

  return (
    <Container style={{display: 'none'}}>
      <LeftBox></LeftBox>
      <RightBox>

      </RightBox>
    </Container>
  )
}

export default AniPage