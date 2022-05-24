import './About_Solutions.scss'
import About from '../../container/About/About'
import Solutions from '../../container/Solutions/Solutions'

const AboutSolutions = () => {
  return (
    <div className='about_solutions_container'>
        <div className="about_content">
            <About/>
        </div>
        <div className="solutions_content">
          <Solutions/>
        </div>
    </div>
  )
}

export default AboutSolutions