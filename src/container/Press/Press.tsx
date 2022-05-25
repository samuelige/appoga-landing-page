import React from 'react'
import { data } from './data'
import './Press.scss'

const Press = () => {
  return (
    <div className='press'>
        <div className="press_title">
            <h1>Latest from the Press</h1>
        </div>

        <div className="press_content">
            {
                data && data.map(({id, title, body}) => (
                    <div className="press_card" key={id}>
                        <h4>{title}</h4>
                        <p>{body}</p>

                        <div className='small'><a href="##">see more</a></div>
                    </div>
                ))
            }
        </div>


    </div>
  )
}

export default Press