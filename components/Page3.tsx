import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
  height: 100%;
  background-color: black;
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

    </Container>
  )
}

export default Page3