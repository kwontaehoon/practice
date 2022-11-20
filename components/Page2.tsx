import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';
import styles from './button1.module.css';

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
  padding: 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
    width: 100px;
    height: 100px;
  }
`
const SubBox = styled.div`
  width: 200px;
  height: 250px;
  background-color: orange;
  position: relative;
  overflow: hidden;
  
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

const Page2 = ({pageNumber, setPageNumber}: PageProps) => {

  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [info, setInformation] = useState<Information | null>(null);

  return (
    <Container>
      <Box>
        <SubBox>
          <Circle>
            <div>dd</div>
            <div className={styles.button}></div>
          </Circle>
        </SubBox>
        <SubBox><Circle /></SubBox>
        <SubBox><Circle /></SubBox>
        <SubBox><Circle /></SubBox>
      </Box>
    </Container>
  )
}

export default Page2