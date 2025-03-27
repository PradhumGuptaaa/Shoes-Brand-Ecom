const express = require('express');
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const db = require('./db');
const bodyParser = require('body-parser');
require('dotenv').config();
const UserCollection = require('./models/UserCollection');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;
app.use(express.json());  // For parsing application/json

// User Route
const UserRoute = require("./Routes/User");
app.use('/auth', UserRoute);

const adminProductsRouter = require("./Routes/admin/products-routes");
app.use("/api/admin/products", adminProductsRouter);

const adminOrderRouter = require("./Routes/admin/order-routes");
app.use("/api/admin/orders", adminOrderRouter);


const shopProductsRouter = require("./Routes/shop/products-routes");
app.use("/api/shop/products", shopProductsRouter);


// const shopCartRouter = require("./Routes/shop/cart-routes");
// app.use("/api/shop/cart", shopCartRouter);

const shopAddressRouter = require("./Routes/shop/address-routes");
app.use("/api/shop/address", shopAddressRouter);

// const shopOrderRouter = require("./Routes/shop/order-routes");
// app.use("/api/shop/order", shopOrderRouter);

const shopSearchRouter = require("./Routes/shop/search-routes");
app.use("/api/shop/search", shopSearchRouter);

const shopReviewRouter = require("./Routes/shop/review-routes");
app.use("/api/shop/review", shopReviewRouter);


const commonFeatureRouter = require("./Routes/common/feature-routes");
app.use("/api/common/feature", commonFeatureRouter);

app.get('/', function (req, res) {
    res.send("hello world");

});

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});