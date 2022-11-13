import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components';

interface PageProps {
  current: number;
  all: number;
  action: boolean;
}
type PagesetProps = (
  setPageNumber: React.Dispatch<React.SetStateAction<boolean>>
) => boolean;

type Todo = { id: number; text: string; done: boolean };
type Information = { name: string; description: string };

const Page3 = ({pageNumber, setPageNumber}:{pageNumber: PageProps, setPageNumber: PagesetProps}) => {

  useEffect(()=>{
    window.addEventListener('wheel', function(e){
      e.stopPropagation();
      console.log('page2: ', window.innerHeight);
    })

    if(pageNumber.current === 3){
      console.log('page3 current: ', pageNumber.current);
      setPageNumber(true);
    }
  })

  return (
    <div>Page3</div>
  )
}

export default Page3