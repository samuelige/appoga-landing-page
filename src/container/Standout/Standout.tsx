import React from 'react'
import { standout } from '../../constants/image'
import './Standout.scss'

const Standout = () => {
  return (
    <div className='standout'>
        <div className='standout_container'>
            <div className="standout_title">
                <h1>Why we Stand out in the Global Market</h1>
            </div>
        </div>
        <div className="standout_content">
            <div className="standout_text">
                <p>
                    In publishing and graphic design, 
                    Lorem ipsum is a placeholder text 
                    commonly used to demonstrate the 
                    visual form of a document or a typeface 
                    without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder 
                    before final copy is available. It is also 
                    used to temporarily replace text in a process 
                    called greeking, which allows designers to consider 
                    the form of a webpage or publication, without the meaning 
                    of the text influencing the design. In publishing and graphic 
                    design, Lorem ipsum is a placeholder text commonly used to 
                    demonstrate the visual form of a document or a typeface without 
                    relying on meaningful content. Lorem ipsum may be used as a placeholder 
                    before final copy is available. It is also used to temporarily replace text 
                    in a process called greeking, which allows designers to consider the form of a 
                    webpage
                </p>
            </div>
            <div className="standout_img">
                <img src={standout} alt="standout"/>
            </div>
        </div>
    </div>
  )
}

export default Standout