import React from 'react'
import './ServiceCard.scss'

interface IProps {
  img: string;
  title: string;
  description?: string;
}

const ServiceCard = ({img, title, description} : IProps) => {
  return (
    <div className="service__card">
        <div className="overlay"></div>
        <img src={img} alt={img} />
        <div className="service_content">
            <h1 className="service_title">{title}</h1>
            <p className="service_text">{description}</p>
        </div>
    </div>
  )
}

export default ServiceCard