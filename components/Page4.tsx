import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';

interface Props {
    p2Scroll: boolean;
    setP2Scroll: ()=>void;
}
type Todo = { id: number; text: string; done: boolean };
type Information = { name: string; description: string };

const Page4 = ({p2Scroll, setP2Scroll}: Props) => {

  useEffect(()=>{
        window.addEventListener('wheel', function(e){
          e.stopPropagation();
          console.log('Page3: ', window.innerHeight);  
      })
  })
  
  return (
    <div>Page4</div>
  )
}

export default Page4