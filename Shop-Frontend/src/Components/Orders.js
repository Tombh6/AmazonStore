
import React from "react";
import styled from "styled-components";
import Navbar from './Navbar';



function Orders() {

    
  
    return (
      <Container>
        <Navbar />
        <Main>
         <OrderContainer>
            <h2>Your Orders</h2>

            <OrderDetail>
                <AddressComponent>
                    <h4>Shipping Address</h4>

                    <div>
                    <p>Tom BH</p>
                    <p>Hertzel</p>
                    <p>TLV</p>
                    <p>IL</p>
                    <p>Phone: 050xxxxxxxx</p>
                    </div>
                </AddressComponent>
                <OrderBasket>
                    <h4>Order</h4>
                    <p>Subtotal : $ <span>1000</span></p>

                    <Product>
                 <Image>
                <img src={"https://m.media-amazon.com/images/I/51eIcuqnBZL._AC_UY327_FMwebp_QL65_.jpg"} alt="" />
                 </Image>
                 <Description>
                   <h4>Beats Fit Pro</h4>
              
                   <p>$ {195}</p>

                 </Description>
                   </Product>
                    
                </OrderBasket>
            </OrderDetail>
         </OrderContainer>
        </Main>
      </Container>
    );
  }
  
const Container = styled.div`
width: 100%;
height: fit-content;
max-width: 1400px;

margin: auto;
background-color: rgb(234, 237, 237);
`;

const Main = styled.div`
min-width: 100vw;
min-height: 100vh;
display: flex;
justify-content: center;
`;

const OrderContainer = styled.div`
padding: 15px;

background-color: #fff;
width: 95%;

h2 {
  font-weight: 500;
  border-bottom: 1px solid lightgray;
  padding-bottom: 15px;
}
`;

const OrderDetail = styled.div`
border-bottom: 1px solid lightgray;
padding-bottom: 20px;
`;

const AddressComponent = styled.div`
margin-top: 20px;

div {
  margin-top: 10px;
  margin-left: 10px;

  p {
    font-size: 14px;
    margin-top: 4px;
  }
}
`;

const OrderBasket = styled.div`
margin-top: 20px;

p {
  font-size: 15px;
  margin-left: 15px;
  margin-top: 15px;

  span {
    font-weight: 600;
  }
}
`;

const Product = styled.div`
display: flex;
align-items: center;
`;

const Image = styled.div`
flex: 0.3;
img {
  width: 100%;
}
`;
const Description = styled.div`
flex: 0.7;

h4 {
  font-weight: 600;
  font-size: 18px;

  @media only screen and (max-width: 1200px) {
    font-size: 14px;
  }
}

p {
  font-weight: 600;
  margin-top: 10px;
}

button {
  background-color: transparent;
  color: #1384b4;
  border: none;
  outline: none;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
`;
export default Orders;