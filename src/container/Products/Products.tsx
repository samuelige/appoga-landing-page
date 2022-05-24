import React from 'react'
import ProductsCard from '../../components/Products_Card/ProductsCard'
import { data } from './data'
import './Products.scss'

export const Products = () => {
  return (
    <div className='products'>
        <div className='product_container_title'>
            <h1>Some of our Products</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used</p>
        </div>

        <div className="product_card_container">
            {
                data.map(({img, title}) => (
                    <ProductsCard img={img} title={title}/>
                ))
            }
        </div>
        <div className='small'><a href="##">see more</a></div>
    </div>
  )
}
