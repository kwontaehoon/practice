import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';

const ani1 = keyframes`
  0% {transform: translate(0px)}
  100% {transform: translate(-500px)}
`
const Container = styled.div`
  border: 3px solid white;
`
const Main = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/images/bg2.png');
  background-size: 100% 100%;
`
const Main2 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/images/bg2.png');
  background-size: 100% 100%;
  animation: ${ani1} 2s 0s;
  animation-fill-mode: forwards;
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

  useEffect(()=>{

    window.addEventListener('wheel', function(e){
      console.log('page2');
      console.log(pageNumber.current);
      setTest(true);
    })

    if(pageNumber.current === 2 && pageNumber.action === false){
      console.log('page2 else');
      setTimeout(()=>{
        setTest(true);
      }, 1000);
    }else{
      setTest(false);
      
    }
  });

  const [test, setTest] = useState(false);

  const box1 = () => {
    if(pageNumber.current === 2){
      return (
        <Main></Main>
      )
    }else{
    return (
        <Main2></Main2>
      )
    }
  }

  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [info, setInformation] = useState<Information | null>(null);

  return (
    <Container className='content' style={{display: test ? 'block' : 'none'}}>
      {box1()}
    </Container>
  )
}

export default Page2