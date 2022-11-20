import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';

const ani1 = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`
const ani2 = keyframes`
  0% { opacity: 1; transform: rotate(50deg); }
  100% { opacity: 0; z-index: 0; }
`

const Container = styled.div`
  width: 70%;
  height: 500px;
  position: absolute;
  z-index: 500;
  transition: 2s;
`
const LeftBox = styled.div<{ active: boolean }>`
  border: 3px solid black;
  width: 50%;
  height: 100%;
  background-color: teal;
  padding: 30px;
  animation: ${props => props.active ? ani1 : ani2} 1s;
  animation-fill-mode: forwards;
`
const RightBox = styled.div<{ active: boolean }>`
  border: 3px solid black;
  width: 50%;
  height: 100%;
  background-color: aquamarine;
  animation: ${props => props.active ? ani1 : ani2} 2s;
  animation-fill-mode: forwards;
`

interface PageProps {
  display1: boolean;
  setDisplay1: React.Dispatch<React.SetStateAction<boolean>>
}

const AniPage = ({display1, setDisplay1}: PageProps) => {

  useEffect(()=>{
    console.log('AniPage: ', display1);
    if(display1 === false){
      setTimeout(()=>{

      }, 2000);
    }
  })
  return (
    <Container style={{display: display1 ? 'flex' : 'null'}}>
      <LeftBox active={display1}></LeftBox>
      <RightBox active={display1}></RightBox>
    </Container>
  )
}

export default AniPage