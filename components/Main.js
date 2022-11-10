import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Page1 from './Page1';
import Page2 from './Page2';
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
  border: 2px solid white;
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
  border: 2px solid white;
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

const Main = () => {

    const [pageNumber, setPageNumber] = useState({
        all: 7,
        current: 1 
      });
    console.log('current: ', pageNumber.current);
    console.log('all: ', pageNumber.all); 

    const [test, setTest] = useState(1);
    console.log('test: ', test);

    useEffect(()=>{

      window.addEventListener("wheel", function(e){
        console.log('aa');
        console.log(window.innerHeight*3);
        window.scrollTo({ left: 500, top: window.innerHeight*3, behavior: "smooth" });
        e.preventDefault();
      },{passive : false});
        
        // window.addEventListener("wheel", function(e){
        //     e.preventDefault();
        // },{passive : false});
    
        // const $html = $("html");
        // let page = 1;
        // const lastPage = $(".content").length;
     
        // $html.animate({scrollTop:0}, 10);
    
    
        // $(window).on("wheel", function(e){
        //   console.log('wheel');

        //     if($html.is(":animated")) return;
        //     if(e.originalEvent.deltaY > 0){
        //         if(page == pageNumber.all) return;
        //         // setPageNumber(prevState => ({
        //         //   ...prevState,
        //         //   current: 2,
        //         // }));
        //         page++;

        //         console.log('aa: ', pageNumber);
        //     }else if(e.originalEvent.deltaY < 0){
        //         if(page == 1) return;
        //         page--;
        //     }
        //     const posTop = (page-1) * $(window).height();
        //     $html.animate({scrollTop : posTop});
        // });

        $(window).bind('wheel', function(event){
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                // scroll up
                // console.log("스크롤 위로");
            }
            else {
                // scroll down
                // console.log("스크롤 아래로");
            }
        });
    }, []);
    

    const [scroll, setScroll] = useState(1);
    console.log('scroll: ', scroll);

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
      </Footer>

        <Page1 />
        <div className="content"><h1>2</h1></div>
        <div className="content"><h1>3</h1></div>
        <div className="content"><h1>4</h1></div>
        <div className="content"><h1>5</h1></div>
        <div className="content"><h1>6</h1></div>
        <div className="content"><h1>7</h1></div>

    
    </Container>
  )
}

export default Main