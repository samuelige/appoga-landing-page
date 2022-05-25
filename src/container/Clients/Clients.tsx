import React from 'react'
import { circle_clients } from '../../constants/image'
import './Clients.scss'

const Clients = () => {
  return (
    <div className='clients'>
        <div className="clients_txt_container">
            <h1>Our Clients</h1>
            <p>We work with and provide IT solutions for a diverse range of industries. From food delivery brands to multinational financial institutions</p>
        </div>
        <div className="clients_img_container">
            <img src={circle_clients} alt="circle_clients"/>
        </div>
    </div>
  )
}

export default Clients