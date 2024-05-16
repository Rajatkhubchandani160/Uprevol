import React from 'react';


const ProductPage = () => {
  const product = {
    id: 1,
    name: 'Fire Hydrant Services',
    description: 'Our fire hydrant services include design, installation, maintenance, and repair to ensure your building has a reliable and compliant system in case of a fire emergency',
    price: '$99.99',
    imageUrl: 'https://www.monolithsafetyexperts.com/wp-content/uploads/2023/03/9d1d582cba5cdc61cf806f679a27fabd.png'
  };

  return (
   

<div className="product-page">
      <div className="product-images">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h2>{product.price}</h2>
        <button>ADD TO CART</button>
        <div className='Buynow'>
        <button>ENQUIRY NOW</button>

        </div>

      </div>

    </div>
   
   
  );
};

export default ProductPage;