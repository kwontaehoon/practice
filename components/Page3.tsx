import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  height: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Box = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-color: darkgoldenrod;
  border: 2px solid white;
  
  button{
    width: 50px;
    height: 50px;
    background-color: blue;
  }
  &:focus{
    background-color: antiquewhite;
  }
`
interface PageProps {
  pageNumber:{
    current: number;
    all: number;
    action: boolean;
  }
  setPageNumber: React.Dispatch<React.SetStateAction<object>>
}

type Todo = { id: number; text: string; done: boolean };
type Information = { name: string; description: string };

const Page3 = ({pageNumber, setPageNumber}: PageProps) => {

  return (
    <Container>
      <Box>
        <button>dd</button>
      </Box>

    </Container>
  )
}

export default Page3