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
                <Card  image={"https://m.media-amazon.com/images/I/51tYxedQ1-L._AC_UF452,452_FMjpg_.jpg"} price={850} rating={3} title={"SAMSUNG"} />
                <Card  image={"https://m.media-amazon.com/images/I/3105D4N+YAL._AC_UF452,452_FMjpg_.jpg"} price={250} rating={4} title={"Airpods"} />
                <Card  image={"https://m.media-amazon.com/images/I/51tYxedQ1-L._AC_UF452,452_FMjpg_.jpg"} price={250} rating={3} title={"SAMSUNG"} />
                <Card  image={"https://m.media-amazon.com/images/I/51tYxedQ1-L._AC_UF452,452_FMjpg_.jpg"} price={250} rating={3} title={"SAMSUNG"} />
                <Card  image={"https://m.media-amazon.com/images/I/51tYxedQ1-L._AC_UF452,452_FMjpg_.jpg"} price={250} rating={3} title={"SAMSUNG"} />
                <Card  image={"https://m.media-amazon.com/images/I/51tYxedQ1-L._AC_UF452,452_FMjpg_.jpg"} price={250} rating={3} title={"SAMSUNG"} />
                <Card  image={"https://m.media-amazon.com/images/I/51tYxedQ1-L._AC_UF452,452_FMjpg_.jpg"} price={250} rating={3} title={"SAMSUNG"} />
                <Card  image={"https://m.media-amazon.com/images/I/51tYxedQ1-L._AC_UF452,452_FMjpg_.jpg"} price={250} rating={3} title={"SAMSUNG"} />
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

grid-auto-rows: 420px 420px;
grid-template-columns: repeat(4,280px);
grid-gap: 20px;
/*Mobile screen */
@media only screen and (max-width: 767px){
grid-template-columns: repeat(2, 50%);
grid-gap: 0;
}
/*Tablet screen */
@media only screen and (min-width: 767px) and (max-width: 1200px){
grid-template-columns: repeat(3, 30%);
}

@media only screen and (min-width: 767px){
    margin-top: -130px;
    padding: 10px 0px;
}
`;

export default Home
