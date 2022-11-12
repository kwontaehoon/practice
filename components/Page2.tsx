import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  background-image: url('/images/bg2.png');
  background-size: 100% 100%;
  padding-top: 100px;
`
const Main = styled.div`
  width: 100px;
  height: 100px;
`

const Page2 = (p2scroll: number, setP2scroll: ()=> void) => {

  useEffect(()=>{
    console.log()
    window.addEventListener('scroll', function(e){
      console.log('page2 scroll');
      setTest(test + 1);

    })
  })

  const [test, setTest] = useState(1);
  console.log(p2scroll);
  return (
    <Container className='content'>
      <Main>
        {test}
      </Main>
    </Container>
  )
}

export default Page2