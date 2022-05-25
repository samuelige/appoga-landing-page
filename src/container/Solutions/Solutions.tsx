import CustomCarousel from '../../components/Custom_Carousel/Custom_Carousel'
import {data} from './data'
import ImageTitleCard from '../../components/ImageTitle_Card/ImageTitleCard'
import './Solutions.scss'

const Solutions = () => {
  return (
    <div className='solutions_container'>
        <div className='solutions_container_title'>
            <h1>Our SaaS Solutions</h1>
            <p>We have experienced professionals to develop platforms that suit your needs</p>
        </div>
        <div className='solutions_container_cards'>
            <CustomCarousel>
                {
                    data.map(({img, title}) => (
                        <ImageTitleCard img={img} title={title} />
                    ))
                }
            </CustomCarousel>
        </div>
    </div>
  )
}

export default Solutions