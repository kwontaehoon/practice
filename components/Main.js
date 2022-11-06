import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
`

const Main = () => {

    useEffect(()=>{
        
        window.addEventListener("wheel", function(e){
            e.preventDefault();
        },{passive : false});
    
        var $html = $("html");
     
        var page = 1;
     
        var lastPage = $(".content").length;
     
        $html.animate({scrollTop:0},10);
    
    
        $(window).on("wheel", function(e){
     
            if($html.is(":animated")) return;
         
            if(e.originalEvent.deltaY > 0){
                if(page== lastPage) return;
         
                page++;
            }else if(e.originalEvent.deltaY < 0){
                if(page == 1) return;
         
                page--;
            }
            var posTop = (page-1) * $(window).height();
         
            $html.animate({scrollTop : posTop});
         
        });
        
    })
    

    const [scroll, setScroll] = useState(1);
    console.log('scroll: ', scroll);

   
  return (
    <Container>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>

        <div className="content"><h1>1</h1></div>
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