import React, { useState } from 'react'
import ProductCards from './ProductCards'
import products from '../data/products.json'

const TrendingProducts = () => {

  const [visibleProducts, setVisibleProducts] = useState(4)

  const loadMoreProducts = () =>{
    setVisibleProducts(prevCount => prevCount + 4)
  }

  return (
    <section className='section__container product_container'>
        <h2 className='section__header'>Trending Products</h2>
        <p className='section__subheader mb-12'>
            Discover the Hotest Picks: Elevate your style with our curated collection of Trending Womens Fashion Products
        </p>
        <div className='mt-12'>
         <ProductCards products={products.slice(0,visibleProducts)} />
        </div>
        <div className='product__button'>
            {
                visibleProducts < products.length && (
                    <button className='btn' onClick={loadMoreProducts}>Lode More</button>
                )
            }
        </div>
        
    </section>
  )
}

export default TrendingProducts
