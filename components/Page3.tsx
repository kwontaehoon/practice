import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
  background-color: black;
  border: 3px solid white;
  height: 100vh;
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
      console.log('page3');
      
    })

    if(pageNumber.current === 3 && pageNumber.action === false){
      console.log('page3 else');

    }else{

    }
  });

  const [test, setTest] = useState(false);

  return (
    <Container className='content' style={{overflow: test ? 'visible' : 'hidden'}}>

    </Container>
  )
}

export default Page3