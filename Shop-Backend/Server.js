const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port= 3001;

//Middleware
app.use(express.json());
app.use(cors());

//Connection URL
const connection_url = "mongodb+srv://Tombh6:0505795582@cluster0.uumqpcw.mongodb.net/Cluster0?retryWrites=true&w=majority"

mongoose.connect(connection_url, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
//API
app.get("/",(req,res) => res.status(200).send("Home Page"));

//Add Product
app.post('/products/add', (req,res)=>{
    const productDetail= req.body;

    console.log('Product Detail >>>>', productDetail);
});

app.listen(port, () => console.log("Listening on the port:", port));