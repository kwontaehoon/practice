import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import styles from './ButtonAni.module.scss';


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`
const LeftBox = styled.div`
    border: 1px solid black;
    width: 50%;
    height: 100%;
    background-color: teal;
    padding: 30px;
    

    span{
        cursor: pointer;
        font-size: 30px;
        font-weight: bold;
        -webkit-text-stroke: 1px #f9f7f1;
        background-image: linear-gradient(0deg, #f9f7f1, #f9f7f1);
        -webkit-background-clip: text;
        color: transparent;
        background-repeat: no-repeat;
        background-position: 0% 0%;
        background-size: 0% 100%;
        transition: 0.5s;
        
        &:hover{
            background-size: 100% 100%;
        }
        & .right{
            background-position: 100% 0%;
            background-size: 0% 100%;
        }
    }
`
const RightBox = styled.div`
    border: 1px solid black;
    width: 50%;
    height: 100%;
    background-color: aquamarine;
`
const ButtonAni = () => {
  return (
    <Container>
        <LeftBox>
            <span>ABOUT</span> <br/>
            <span>ABOUT</span> <br/>
            <span>ABOUT</span> <br/>
            <span>ABOUT</span> <br/>
            <p className={styles.title}>ㄹㄹ</p>
        </LeftBox>
        <RightBox></RightBox>
    </Container>
  )
}

export default ButtonAni