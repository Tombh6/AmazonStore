import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Card from './Card'


function Home(){
    return(
        <Container>
            <Navbar/>
            <Banner>
            <img src="./amazonBanner.jpg" alt="" />
             <img src="./amazonBanner.jpg" alt="" /> {/*For big image in mobile screen */}
            </Banner>
            <Main>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Main>
        </Container>
    )
}

const Container= styled.div`
width: 100%;

background-color: rgb(234, 237, 237);
`;
const Banner= styled.div`
width: 100%;
img{
    width: 100%;
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 2),rgba(0, 0, 0, 0.85),rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.55),rgba(0, 0, 0, 0));

    &:nth-child(2){
        display:none;
    }

    @media only screen and (max-width:767px){
        &:nth-child(1){
            display: none;
        }
        &:nth-child(2){
            display:block;
            -webkit-mask-image: none;
        }
    }
}
`;

const Main = styled.div`
display: grid;
justify-content: center;
place-items: center;
width: 100%;

grid-auto-rows: 420px;
grid-template-columns: repeat(4,300px);
grid-gap: 20px;
`;

export default Home
