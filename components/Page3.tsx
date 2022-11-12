import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';

interface Props {
    p2Scroll: boolean;
    setP2Scroll: ()=>void;
}

const Page3 = () => {

    useEffect(()=>{
        window.addEventListener('scroll', function(e){
          console.log('Page2222222222222222222222');
          e.preventDefault();
          setP2Scroll(true);
        })
    })

  return (
    <div>Page3</div>
  )
}

export default Page3