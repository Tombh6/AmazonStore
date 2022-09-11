const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Products = require("./Products");
const Orders = require("./Orders");
const stripe = require("stripe")((process.env.STRIPE_KEY));
const Users = require("./Users");
const bcrypt = require("bcryptjs");
const app = express();
const port= process.env.PORT || 8000;
require("dotenv").config();

console.log(process.env.STRIPE_KEY);


//Middleware
app.use(express.json());
app.use(cors());

//Connection URL
const connection_url = process.env.MON_KEY

mongoose.connect(connection_url, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
//API
app.get("/",(req,res) => res.status(200).send("Home Page"));

// API for SIGNUP

app.post("/auth/signup", async (req, res) => {
    const { email, password, fullName } = req.body;
  
    const encrypt_password = await bcrypt.hash(password, 10);
  
    const userDetail = {
      email: email,
      password: encrypt_password,
      fullName: fullName,
    };
  
    const user_exist = await Users.findOne({ email: email });
  
    if (user_exist) {
      res.send({ message: "The Email is already in use !" });
    } else {
      Users.create(userDetail, (err, result) => {
        if (err) {
          res.status(500).send({ message: err.message });
        } else {
          res.send({ message: "User Created Succesfully" });
        }
      });
    }
  });
  
  // API for LOGIN
  
  app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;
  
    const userDetail = await Users.findOne({ email: email });
  
    if (userDetail) {
      if (await bcrypt.compare(password, userDetail.password)) {
        res.send(userDetail);
      } else {
        res.send({ error: "Invalid Password" });
      }
    } else {
      res.send({ error: "User is not exist" });
    }
  });
  

//Add Product
app.post("/products/add", (req, res)=>{
    const productDetail= req.body;

    console.log("Product Detail >>>>", productDetail);

   Products.create(productDetail, (err, data) =>{
   if(err){
    res.status(500).send(err.message);
   }else{
    res.status(201).send(data);
   }
   });
});

app.get("/products/get", (req, res)=>{
    Products.find((err, data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});

//API for Payment

app.post("/payment/create", async (req, res) =>{
    const total = req.body.amount;
    console.log("Payment Request received for this dollars", total);

    const payment = await stripe.paymentIntents.create({
        amount: total*100,
        currency: "usd", //Write here the currency payment(dollar, shekel etc.)
      });

      res.status(201).send({
        clientSecret: payment.client_secret,
      });

});

//API to addOrder Details
app.post("/orders/add", (req, res) => {
    const products = req.body.basket;
    const price = req.body.price;
    const email = req.body.email;
    const address = req.body.address;
  
    const orderDetail = {
      products: products,
      price: price,
      address: address,
      email: email,
    };
    Orders.create(orderDetail, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Order added to database >> ", result);
        }
      });
});
app.post("/orders/get", (req, res) => {
    const email = req.body.email;
  
    Orders.find((err, result) => {
      if (err) {
        console.log(err);
      } else {
        const userOrders = result.filter((order) => order.email === email);
        res.send(userOrders);
      }
    });
  });

app.listen(port, () => console.log("Listening on the port:", port));