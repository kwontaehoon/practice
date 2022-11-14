import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
  background-color: black;
  border: 3px solid white;
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
      // console.log('page3: ', window.innerHeight);
      setTest(true);
    })

    if(pageNumber.current === 3 && pageNumber.action === false){

      setTest(true);
      
    }else{
      setTest(false);
      

    }
  });

  const [test, setTest] = useState(false);

  return (
    <Container className='content' style={{display: test ? 'block' : 'none'}}>

    </Container>
  )
}

export default Page3