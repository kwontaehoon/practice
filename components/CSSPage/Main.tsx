import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';
import ButtonAni from './ButtonAni';
import MouseAni from './MouseAni';

const ani1 = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`
const ani2 = keyframes`
  0% { opacity: 1; transform: rotate(50deg); }
  100% { opacity: 0; }
`

const Container = styled.div<{ active: boolean }>`
  width: 70%;
  height: 500px;
  position: absolute;
  z-index: 500;
  transition: 2s;
  animation: ${props => props.active ? ani1 : ani2} 1s;
  animation-fill-mode: forwards;
`
const Header = styled.div`
    background-color: yellowgreen;
    height: 30px;
`

interface PageProps {
    info: number;
    display1: boolean;
    setDisplay1: React.Dispatch<React.SetStateAction<boolean>>
}

const Main = ({info, display1, setDisplay1}: PageProps) => {

    const List = ():any => {
        switch(info){
            case 1: return <ButtonAni />
            case 2: return <MouseAni />
        }
    }


  return (
    <Container style={{display: display1 ? 'block' : 'none'}} active={display1}>
        <Header>제목</Header>
        <List />
    </Container>
  )
}

export default Main