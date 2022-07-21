import React from 'react';
import styled from "styled-components";
import Rating from '@material-ui/lab/Rating';


function Card() {
  return (
    
    <Container>
        <Image> {/*For image links that which will appear on the cards*/}
        <img src="https://m.media-amazon.com/images/I/51tYxedQ1-L._AC_UF452,452_FMjpg_.jpg" alt="" />
        </Image>
        <Description>
         <h5>SAMSUNG 85" Class QLED 4K UHD Q60B Series Dual LED Quantum HDR, Motion Xcelerator</h5>
         <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
         <p>$ 250</p>

         <button>Add to cart</button>
        </Description>
    </Container>
  )
}

const Container= styled.div`
width: 100%;
height: 100%;

display: flex;
flex-direction: column;
background-color: #fff;
z-index: 10;
 /*border: 1px solid red; //Card border color */
`;
const Image= styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 20px;
flex: 0.3;

img{
    width: 180px;
    height: 200px;
}
`;
const Description= styled.div`
width: 90%;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
flex: 0.7;

h5{
    font-size: 16px;
    font-weight: 600;
}
p{
    font-weight: 600;
}

button{
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;

    cursor: pointer;
}
`;

export default Card