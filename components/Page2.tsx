import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';

const ani1 = keyframes`
  0% {opacity: 1;}
  100% {opacity: 0;}
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

interface Props {
  p2Scroll: boolean;
  setP2Scroll: ()=>void;
}
type Todo = { id: number; text: string; done: boolean };
type Information = { name: string; description: string };

const Page2 = ({p2Scroll, setP2Scroll}: Props) => {

  useEffect(()=>{
    window.addEventListener('scroll', function(e){
      console.log('Page2222222222222222222222');
      e.preventDefault();
      setP2Scroll(true);
    })
  })

  const box1 = () => {
    if(p2Scroll === false){
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
    <Container className='content'>
      {box1()}
    </Container>
  )
}

export default Page2