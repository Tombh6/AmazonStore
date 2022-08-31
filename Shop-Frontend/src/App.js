import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import Checkout from "./Components/Checkout";
import Home from './Components/Home';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Address from './Components/Address';
import Payment from './Components/Payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AddProduct from './Components/AddProduct';
import Orders from "./Components/Orders";


const promise = loadStripe(
  "pk_test_51LZVZTHyIX1HyiLfaYXYu2upkzU4Vd2MgcEL3OSo8pAVlFQlmsM7I14C7Onl7aXyITPGW60pIhbscmS96ugHtCRG009fF0eujm"
);
function App() {

  return (
   <Router>
    <Container>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/address" element={<Address/>}/>
      <Route path="/payment" element={<Elements stripe={promise}>
                <Payment />
              </Elements>}/>
      <Route path="/addproduct" element={<AddProduct/>}/>
      <Route path="/orders" element={<Orders />} />
      </Routes>
    </Container>
   </Router>
  );
}
const Container=styled.div`
width:100vw;
height: 100vh;
overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
export default App;
