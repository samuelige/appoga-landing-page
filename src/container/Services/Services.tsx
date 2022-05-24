import React from 'react'
import ServiceCard from '../../components/Service_Card/ServiceCard'
import { data } from './data'
import './Services.scss'

const Services = () => {
  return (
    <div className='service_container'>
        <h1>Our Services</h1>
        <div className="service_cards_section">
            {
                data.map(({img, title, description}) => (
                    <ServiceCard img={img} title={title} description={description}/>
                ))
            }
        </div>
        <div className='small'><a href="##">see more</a></div>
    </div>
  )
}

export default Services