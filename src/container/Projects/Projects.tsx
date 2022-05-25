import React from 'react'
import CustomCarousel from '../../components/Custom_Carousel/Custom_Carousel'
import ImageTitleCard from '../../components/ImageTitle_Card/ImageTitleCard'
import { data } from './data'
import './Projects.scss'

const Projects = () => {
  return (
    <div className='projects'>
        <div className='project_container_title'>
            <h1>Featured Projects</h1>
            <p>Some of our projects</p>
        </div>

        <div className='project_container_cards'>
            <CustomCarousel>
                {
                    data.map(({img, title}) => (
                        <ImageTitleCard img={img} title={title} />
                    ))
                }
            </CustomCarousel>
        </div>

        <div className='small'><a href="##">see more</a></div>
    </div>
  )
}

export default Projects