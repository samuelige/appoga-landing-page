import CustomCarousel from '../../components/Custom_Carousel/Custom_Carousel'
import {data} from './data'
import SolutionCard from '../../components/Solutions_Card/Solution_Card'
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
                        <SolutionCard img={img} title={title} />
                    ))
                }
            </CustomCarousel>
            {/* <SolutionCard /> */}
        </div>
    </div>
  )
}

export default Solutions