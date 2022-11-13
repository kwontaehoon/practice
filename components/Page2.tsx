import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';

const ani1 = keyframes`
  0% {transform: translate(0px)}
  100% {transform: translate(-500px)}
`
const Container = styled.div`

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

interface PageProps{
  current: number;
  all: number;
  action: boolean;
}
interface PagesetProps{
  setPageNumber: ()=>void;
}

type Todo = { id: number; text: string; done: boolean };
type Information = { name: string; description: string };

const Page2 = ({pageNumber, setPageNumber}:{pageNumber: PageProps, setPageNumber: PagesetProps}) => {

  useEffect(()=>{

    window.addEventListener('wheel', function(e){
      e.stopPropagation();
      console.log('page2: ', window.innerHeight);
    })

    if(pageNumber.current === 2){
      console.log('page2 current: ', pageNumber.current);
    }
  })

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
    <Container className='content' data-rellax-speed="-3">
      {box1()}
    </Container>
  )
}

export default Page2