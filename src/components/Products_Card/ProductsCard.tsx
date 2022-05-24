import React from 'react'
import './ProductsCard.scss'

interface IProps {
    img: string;
    title: string;
}

const ProductsCard = ({img, title} : IProps) => {
  return (
    <div className="products__card">
        <div className="overlay"></div>
        <img src={img} alt={img} />
        <div className="products_content">
            <h1 className="products_title">{title}</h1>
        </div>
    </div>
  )
}

export default ProductsCard