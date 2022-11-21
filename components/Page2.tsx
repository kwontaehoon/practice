import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Main from './CSSPage/Main'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const ani1 = keyframes`
  0% {transform: translate(0px)}
  100% {transform: translate(-500px)}
`
const Container = styled.div`
  height: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Box = styled.div`
  width: 90%;
  height: 90%;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
const Circle = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: -100%;
  right: -100%;
  background-color: ivory;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const SubCircle = styled.div`
  background-color: aquamarine;
  width: 200px;
  height: 200px;
  border-radius: 40%;
  padding: 70px 0px 0px 40px;
  font-size: 20px;
  font-weight: bold;
`
const SubBox = styled.div`
  width: 200px;
  height: 250px;
  background-color: white;
  position: relative;
  overflow: hidden;
  margin: 25px;
  box-shadow: 5px 2px 5px 2px lightgray;
  border-radius: 10px;
  
  /* &:hover > ${Circle}{ */
  ${Circle}{
      width: 100%;
      height: 100%;
      bottom: -25%;
      right: -25%;
  }
`
const ContentBox = styled.div`
  width: 90px;
`
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
`
const Content = styled(Title)`
  font-size: 16px;
`

interface PageProps {
  pageNumber:{
    current: number;
    all: number;
    action: boolean;
  }
  setPageNumber: React.Dispatch<React.SetStateAction<object>>
}

interface Test {
  test: boolean;
  setTest: React.Dispatch<React.SetStateAction<boolean>>
}
interface Test2 {
  title: string;
  id: string;
}

type Todo = { id: number; text: string; done: boolean };
type Information = { name: string; description: string };


const Page2 = ({pageNumber, setPageNumber}: PageProps) => {

  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [info, setInfo] = useState<number>(0); // AniPage 식별번호
  const [display1, setDisplay1] = useState<boolean>(false); // AniPage display

  const [test2, setTest2] = useState<Test2[]>([]);

  return (
    <Container>
      <Main info={info} display1={display1} setDisplay1={setDisplay1}/>
      <Box>
        <SubBox onClick={()=>{
          setDisplay1(!display1);
          setInfo(1);
          }}>
          <Circle>
            <SubCircle>
              <ContentBox>
                <Title><FontAwesomeIcon icon={faMagnifyingGlass} /></Title>
                <Content>Button Ani</Content>
              </ContentBox>
            </SubCircle>
          </Circle>
        </SubBox>
        <SubBox onClick={()=>{
          setDisplay1(!display1);
          setInfo(2);
        }}>
        <Circle>
            <SubCircle>
              <ContentBox>
                <Title><FontAwesomeIcon icon={faMagnifyingGlass} /></Title>
                <Content>Mouse Ani</Content>
              </ContentBox>
            </SubCircle>
          </Circle>
        </SubBox>
        <SubBox>
          <Circle><div>준비중</div></Circle>
        </SubBox>
        <SubBox>
          <Circle><div>준비중</div></Circle>
        </SubBox>
      </Box>
    </Container>
  )
}

export default Page2