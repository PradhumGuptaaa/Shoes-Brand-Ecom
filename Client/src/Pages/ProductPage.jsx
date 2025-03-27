// import React from 'react'

// const ProductPage = () => {
//   return (
//     <div>
//          products 
//     </div>
//   )
// }

// export default ProductPage

// import React, { useEffect, useState } from 'react';

// const ProductPage = ({ category }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products based on the selected category
//     fetch(`/api/products?category=${category}`)
//       .then(response => response.json())
//       .then(data => setProducts(data));
//   }, [category]);

//   return (
//     <div>
//       <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
//       <div className="products">
//         {products.map((product) => (
//           <div key={product.id}>
//             <img src={product.image} alt={product.name} />
//             <p>{product.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

import React from "react";
import "../Css_files/Product.css";


const products = [
  { id: 1, name: "Nike Air Max 270", brand: "Nike", price: "$150", image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/air-max-270.jpg", description: "Lightweight and comfortable, perfect for daily wear." },
  { id: 2, name: "Adidas Ultraboost 22", brand: "Adidas", price: "$180", image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ultraboost-22.jpg", description: "Energy-returning boost technology for maximum comfort." },
  { id: 3, name: "Puma RS-X", brand: "Puma", price: "$120", image: "https://images.puma.com/image/upload/f_auto,q_auto,puma-rs-x.jpg", description: "Futuristic design with great cushioning." },
  { id: 4, name: "Reebok Nano X2", brand: "Reebok", price: "$140", image: "https://reebok.com/image/upload/reebok-nano-x2.jpg", description: "Durable and stable for intense workouts." },
  { id: 5, name: "New Balance 327", brand: "New Balance", price: "$110", image: "https://newbalance.com/images/327-shoes.jpg", description: "Retro-inspired design with modern comfort." },
  { id: 6, name: "Converse Chuck Taylor All Star", brand: "Converse", price: "$60", image: "https://www.converse.com/images/chuck-taylor-all-star.jpg", description: "Classic canvas sneaker for a timeless look." },
  { id: 7, name: "Vans Old Skool", brand: "Vans", price: "$70", image: "https://images.vans.com/is/image/Vans/old-skool.jpg", description: "Iconic skate shoe with durable construction." },
  { id: 8, name: "Asics Gel-Kayano 28", brand: "Asics", price: "$160", image: "https://asics.com/image/upload/gel-kayano-28.jpg", description: "Designed for stability and long-distance running." },
  { id: 9, name: "Under Armour HOVR Phantom 2", brand: "Under Armour", price: "$140", image: "https://underarmour.com/images/hovr-phantom-2.jpg", description: "Breathable knit upper with responsive cushioning." },
  { id: 10, name: "Skechers D'Lites", brand: "Skechers", price: "$80", image: "https://skechers.com/image/upload/dlites.jpg", description: "Chunky sneakers with memory foam comfort." },
  { id: 11, name: "Jordan Retro 4", brand: "Jordan", price: "$200", image: "https://nike.com/images/jordan-retro-4.jpg", description: "Classic Jordan style with modern comfort." },
  { id: 12, name: "Fila Disruptor 2", brand: "Fila", price: "$90", image: "https://fila.com/image/upload/disruptor-2.jpg", description: "Bold and chunky design with superior comfort." },
  { id: 13, name: "Yeezy Boost 350 V2", brand: "Adidas", price: "$220", image: "https://adidas.com/image/upload/yeezy-boost-350-v2.jpg", description: "Trendy and ultra-comfortable lifestyle sneakers." },
  { id: 14, name: "Timberland 6-Inch Boot", brand: "Timberland", price: "$180", image: "https://timberland.com/image/upload/6-inch-boot.jpg", description: "Rugged boots built for durability and style." },
  { id: 15, name: "Salomon Speedcross 5", brand: "Salomon", price: "$130", image: "https://salomon.com/image/upload/speedcross-5.jpg", description: "High-performance trail running shoes." }
];


const ProductPage = () => {
  return (
    <div className="container">
      <h2 className="title">Our Latest Shoes</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-brand">{product.brand}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
