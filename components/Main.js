import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import About from './About';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Container = styled.div`
    width: 100%;
    height: 100vh;
`
const Header = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 999;
`
const Logo = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const TabBar = styled(Logo)``

const Main = () => {
    

    useEffect(()=>{
        
        window.addEventListener("wheel", function(e){
            e.preventDefault();
        },{passive : false});
    
        const $html = $("html");
        let page = 1;
        const lastPage = $(".content").length;
     
        $html.animate({scrollTop:0}, 10);
    
    
        $(window).on("wheel", function(e){
            if($html.is(":animated")) return;
            if(e.originalEvent.deltaY > 0){
                if(page== lastPage) return;
                page++;
            }else if(e.originalEvent.deltaY < 0){
                if(page == 1) return;
                page--;
            }
            const posTop = (page-1) * $(window).height();
            $html.animate({scrollTop : posTop});
        });

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
        
    })
    

    const [scroll, setScroll] = useState(1);
    console.log('scroll: ', scroll);

  return (
    <Container>
        <Header>
        <Logo className='text-lg text-white'>Tae-Hoon</Logo>
        <TabBar><i className="fa-sharp fa-solid fa-bars text-3xl text-white"></i></TabBar>
      </Header>
        <About />
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