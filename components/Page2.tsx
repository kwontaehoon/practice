import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';

const ani1 = keyframes`
  0% {transform: translate(0px)}
  100% {transform: translate(-500px)}
`
const Container = styled.div`
  height: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Box = styled.div`
  border: 1px solid white;
  width: 90%;
  height: 90%;
  background-color: green;
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

const Page2 = ({pageNumber, setPageNumber}: PageProps) => {

  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [info, setInformation] = useState<Information | null>(null);

  return (
    <Container>
      <Box></Box>
    </Container>
  )
}

export default Page2