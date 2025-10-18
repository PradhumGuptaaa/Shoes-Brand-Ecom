const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// Initialize DB connection
require('./db');

const app = express();

// Middleware - CORS updated for production
app.use(cors({
    origin: [
        'https://your-frontend-vercel-url.vercel.app', // यह URL आपको frontend deploy के बाद मिलेगा
        'http://localhost:3000',
        'http://localhost:5173'
    ],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// Auth and user routes
const userRoutes = require('./Routes/User');
app.use('/api/auth', userRoutes);

// Shop routes
app.use('/api/shop/products', require('./Routes/shop/products-routes'));
app.use('/api/shop/search', require('./Routes/shop/search-routes'));
app.use('/api/shop/review', require('./Routes/shop/review-routes'));
app.use('/api/shop/orders', require('./Routes/shop/order-routes'));
app.use('/api/shop/cart', require('./Routes/shop/cart-routes'));
app.use('/api/shop/address', require('./Routes/shop/address-routes'));

// Admin routes
app.use('/api/admin/products', require('./Routes/admin/products-routes'));
app.use('/api/admin/orders', require('./Routes/admin/order-routes'));

// Common routes
app.use('/api/common/feature', require('./Routes/common/feature-routes'));

// Health check
app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


