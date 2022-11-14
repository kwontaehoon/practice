import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'


const Container = styled.div`
  width: 100%;
  height: 100vh;
`
const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;
  font-size: 30px;
`
const Logo = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const TabBar = styled(Logo)``

const Footer = styled.div`
  width: 100%;
  height: 24.5%;
  position: fixed;
  display: flex;
  bottom: 30px;
  z-index: 999;
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

  let timeout;

  useEffect(()=>{

    window.addEventListener("wheel", function(e){
      clearTimeout(timeout);
      timeout = setTimeout(function(){ //다시 휠 이벤트 발생  0.1초후

        if(e.deltaY > 0){
        console.log('내려갑니다.');
      
        setTimeout(()=>{
          window.scrollTo({top: window.innerHeight*pageNumber.current, behavior: "smooth" });

          setPageNumber(prevState => ({
            ...prevState,
            current: pageNumber.current + 1,
          }));
        }, 500)
        

        }else if(e.deltaY < 0 && pageNumber.current > 1){
        
        console.log('올라갑니다.');
        setPageNumber(prevState => ({
          ...prevState,
          current: pageNumber.current - 1,
        }));
        setTimeout(()=>{
           window.scrollTo({top: window.innerHeight*(pageNumber.current-2), behavior: "smooth" });
        }, 500)
      }
    }, 500);
    
    });
  });

    const [pageNumber, setPageNumber] = useState({ // 전체 페이지
        all: 7,
        current: 1,
        action: false,
      });
    console.log('pageNumber current: ', pageNumber.current);
    console.log('pageNumber.action: ', pageNumber.action);

  return (
    <Container>
        <Header>
        <Logo className='text-lg text-white'>Tae-Hoon</Logo>
        <TabBar><FontAwesomeIcon icon={faBarsStaggered} /></TabBar>
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

      <Page1 pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      <Page2 pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      <Page3 pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      {/* <div className="content"><h1>4</h1></div>
      <div className="content"><h1>5</h1></div>
      <div className="content"><h1>6</h1></div>
      <div className="content"><h1>7</h1></div> */}
    </Container>
  )
}

export default Main