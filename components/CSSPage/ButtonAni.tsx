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
            <span className={styles.left}>ABOUT</span> <br/>
            <span className={styles.right}>ABOUT</span> <br/>
            <span className={styles.top}>ABOUT</span> <br/>
            <span>ABOUT</span> <br/>
            <p className={styles.title}>ㄹㄹ</p>
        </LeftBox>
        <RightBox></RightBox>
    </Container>
  )
}

export default ButtonAni