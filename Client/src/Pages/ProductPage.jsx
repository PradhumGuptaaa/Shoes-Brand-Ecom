import React from 'react'

const ProductPage = () => {
  return (
    <div>
         products 
    </div>
  )
}

export default ProductPage

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
