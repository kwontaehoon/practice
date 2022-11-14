import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
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

  useEffect(()=>{
    window.addEventListener('wheel', function(e){
      e.stopPropagation();
      // console.log('page3: ', window.innerHeight);
    })
  });

  return (
    <Container className='content'>

    </Container>
  )
}

export default Page3