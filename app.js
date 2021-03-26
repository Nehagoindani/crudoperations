const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require('./routes/Product.route');

const app= express();

mongoose.connect('mongodb://localhost/productsDb', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to Database"))
.catch(err => {
    console.error("Couldnot connect to Database", err);
    process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/products', Product);

app.listen(3000, ()=>{
    console.log("Server is up and running on port 3000...");
});