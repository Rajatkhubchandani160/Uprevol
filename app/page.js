import React from 'react'
import Header from './Header';
import Footer from './Footer';
import ProductPage from './ProductPage';
import Discription from './Discription';
import Para from './Para';
import Products from './Products';
const page = () => {
  return (
    <>
    <Header/>
    <ProductPage/>
    <Discription/>
    <Para/>
    <Products/>
    <Footer/>
    
    </>
  )
}

export default page