import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import StartPage from './StartPage';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { SectionsContainer, Section } from 'react-fullpage';


const Container = styled.div`
  border: 2px solid black;
`
const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 500;
  font-size: 30px;
`
const Logo = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const TabBar = styled(Logo)`
`

const Footer = styled.div`
  width: 100%;
  height: 24.5%;
  position: fixed;
  display: flex;
  bottom: 30px;
  z-index: 500;
`

const CopyRightBox = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-end;
  padding-left: 40px;
`
const Box = styled.div`
  width: 400px;
  height: 60%;
  display: flex;
`
const Subbox1 = styled.div`
  width: 270px;
  font-size: 14px;
  font-weight: bold;
`
const Title = styled.div`
  height: 30%;
  padding: 10px;
  display: flex;
  
  div{
    margin-right: 15px;
  }
`
const Content = styled.div`
  height: 50%;
  padding: 10px;
`
const Subbox2 = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
`
const ButtonBox = styled.div`
  width: 80%;
  height: 45%;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`
const PageBox = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`

const Main = () => {
  console.log();
  
  let options = {
    activeClass: 'section', // the class that is appended to the sections links
    anchors: ['1', '2', '3', '4'],
    scrollBar: false, // use the browser default scrollbar
    delay: 700, // the scroll animation speed
    navigation: false, // use dots navigatio
    verticalAlign: false // align the content of each section vertical
  };


  const [pageNumber, setPageNumber] = useState({ // 전체 페이지
      all: 7,
      current: 1,
      action: false,
  });

  useEffect(()=>{

    const circle = document.querySelector(".circle");

    window.addEventListener('mousemove', function(e){

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      circle.style.left = mouseX + 'px';
      circle.style.top = mouseY + 'px';

      
    })
  })
  

  return (
    <Container>
      <StartPage />
      <div className='circle'></div>
      <Header>
        <Logo className='text-lg text-white'>Tae-Hoon</Logo>
        <TabBar><FontAwesomeIcon icon={faBarsStaggered} style={{cursor: 'pointer'}} /></TabBar>
      </Header>

      <Footer>
        <CopyRightBox>
          <Box>
            <Subbox1>
              <Title>
                <div>appknot</div>
                <div>|</div>
                <div>A FECT</div>
                <div>|</div>
                <div>A RED</div>
              </Title>
              <Content>
                <div>© 2022 knotters all rights reserved.</div>
              </Content>
            </Subbox1>
            <Subbox2>
              <ButtonBox>Contaat</ButtonBox>
            </Subbox2>
          </Box>
        </CopyRightBox>
        <PageBox>
          <div>{pageNumber.current}</div>
          <div>/</div>
          <div>{pageNumber.all}</div>
        </PageBox>
      </Footer>
      
    <SectionsContainer {...options}>
      <Section><Page1 pageNumber={pageNumber} setPageNumber={setPageNumber}/></Section>
      <Section><Page2 pageNumber={pageNumber} setPageNumber={setPageNumber}/></Section>
      <Section><Page3 pageNumber={pageNumber} setPageNumber={setPageNumber}/></Section>
      <Section><Page4 pageNumber={pageNumber} setPageNumber={setPageNumber}/></Section>
      {/* <div className="content"><h1>4</h1></div>
      <div className="content"><h1>5</h1></div>
      <div className="content"><h1>6</h1></div>
      <div className="content"><h1>7</h1></div> */}
    </SectionsContainer>
    </Container>
  )
}

export default Main