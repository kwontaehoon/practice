import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  background-image: url('/images/bg1.jpg');
  background-size: 100% 100%;
  padding-top: 180px;
  height: 100vh;
`
const Main = styled.div`
  height: 60%;
`
const Box = styled.div`
  height: 33.5%;
  font-size: 50px;
  display: flex;
  align-items: center;
  padding-left: 60px;
  font-family: 'GangwonEduPowerExtraBoldA';
  padding-top: 20px;
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

const Page1 = ({pageNumber, setPageNumber}: PageProps) => {

  useEffect(()=>{

    window.addEventListener('wheel', function(e){
      // console.log('page1: ', window.innerHeight);

    })

    if(pageNumber.current === 1 && pageNumber.action === false){
      console.log('page1 else');

    }else{

      
    }
  });

  const [test, setTest] = useState(false);

  return (
    <Container className='content' style={{overflow: test ? 'visible' : 'hidden'}}>
      <Main>
          <Box>D-Transformation</Box>
          <Box>Digital Marketing</Box>
          <Box>Data Analytics</Box>
      </Main>
    </Container>
  )
}

export default Page1