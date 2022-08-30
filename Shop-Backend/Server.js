const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Products = require("./Products");
const stripe = require("stripe")("sk_test_51LZVZTHyIX1HyiLfqn2Z9gr0RP7e2xaQfvHsYNevtOW93D9GXN9UVXLUjTFhaEIi6dV8x0YN95Pj3Pbw0qaOYVG000fEtJnJiq");

const app = express();
const port= 8000;

//Middleware
app.use(express.json());
app.use(cors());

//Connection URL
const connection_url = "mongodb+srv://Tombh:0505795582@cluster0.7c9zf0r.mongodb.net/Cluster0?retryWrites=true&w=majority"

mongoose.connect(connection_url, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
//API
app.get("/",(req,res) => res.status(200).send("Home Page"));

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

app.listen(port, () => console.log("Listening on the port:", port));