import React from 'react';


const Products = () => {
  // const product = {
  //   id: 1,
  //   name: 'Sample Product',
  //   description: 'This is a description of the sample product.',
  //   price: '$99.99',
  //   imageUrl: 'https://via.placeholder.com/300'
  // };

  const relatedProducts = [
    {
      id: 2,
      name: 'Karam Safety Belts',
      price: '$59.99',
      imageUrl: 'https://www.monolithsafetyexperts.com/wp-content/uploads/2024/01/fire-extinguisher-500x500-1.webp'
    },
    {
      id: 3,
      name: 'Fire Suppression System',
      price: '$79.99',
      imageUrl: 'https://www.monolithsafetyexperts.com/wp-content/uploads/2024/02/download-2.jpg'
    },
    {
      id: 4,
      name: 'Pendent Type Sprinkler',
      price: '$89.99',
      imageUrl: 'https://www.monolithsafetyexperts.com/wp-content/uploads/2024/01/pendent-type-sprinkler-500x500-2-300x300.webp'
    }
  ];

  return (
    <div className="container">
      {/* <div className="product-card">
        <div className="product-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h2>{product.price}</h2>
          <button>Add to Cart</button>
        </div>
      </div> */}
      <div className="related-products text-xl font-medium ">
        <h2>Related Products</h2>
        <div className="related-products-grid">
          {relatedProducts.map((relatedProduct) => (
            <div className="related-product-card" key={relatedProduct.id}>
              <img src={relatedProduct.imageUrl} alt={relatedProduct.name} />
              <div className="related-product-details">
                <h3>{relatedProduct.name}</h3>
                <p>{relatedProduct.price}</p>
                <button>ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;