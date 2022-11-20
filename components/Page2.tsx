import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';
import AniPage from './AniPage';

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
  width: 90%;
  height: 90%;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
const Circle = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: -100%;
  right: -100%;
  background-color: ivory;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  div{
    background-color: aquamarine;
    width: 200px;
    height: 200px;
    border-radius: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }
`
const SubBox = styled.div`
  width: 200px;
  height: 250px;
  background-color: white;
  position: relative;
  overflow: hidden;
  margin: 29px;
  box-shadow: 5px 2px 5px 2px lightgray;
  border-radius: 10px;
  
  &:hover > ${Circle}{
      width: 150%;
      height: 150%;
      bottom: -25%;
      right: -25%;
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
type display1 = {}

const Page2 = ({pageNumber, setPageNumber}: PageProps) => {

  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [info, setInformation] = useState<Information | null>(null);
  const [display1, setDisplay1] = useState<boolean>(false);

  return (
    <Container>
      <AniPage/>
      <Box>
        <SubBox onClick={()=>setDisplay1(!display1)}>
          <Circle><div></div></Circle>
        </SubBox>
        <SubBox>
          <Circle><div></div></Circle>
        </SubBox>
        <SubBox>
          <Circle><div>준비중</div></Circle>
        </SubBox>
        <SubBox>
          <Circle><div>준비중</div></Circle>
        </SubBox>
        <SubBox>
          <Circle><div>준비중</div></Circle>
        </SubBox>
      </Box>
    </Container>
  )
}

export default Page2