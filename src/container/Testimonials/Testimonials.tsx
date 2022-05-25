import React from 'react'
import TestimonialCard from '../../components/Testimonial_Card/TestimonialCard'
import { data } from './data'
import './Testimonials.scss'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className='testimonials_container_title'>
            <h1>Testimonials</h1>
        </div>

        <div className="testimonial_content">
            {
                data && data.map(({id, name, location, description}) => (
                    <TestimonialCard id={id} name={name} location={location} description={description}/>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials