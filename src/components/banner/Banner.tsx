import Button from '../button/Button'
import "./Banner.scss"

interface IProps {
    index: number;
    img:  string,
    title: string,
    content: string,
}

const Banner = ({index, img, title, content}: IProps) => {
  return (
    <div className='banner__container' key={index}>
        <div className="overlay"></div>
        <img src={img} className="image" alt=''/>
        <div className="banner__content">
            <h1 className='banner__title'>{title}</h1>
            <p className='banner__text'>
                {content}
            </p>
            <div className="banner__footer">
                <Button>Get a Quote</Button>
            </div>
        </div>
        
    </div>
    

    // <div className="myslide fade">
    //     <div></div>
    //     <div className="txt">
    //         <h1>IMAGE 1</h1>
    //         <p>Web Devoloper<br/>Subscribe To My Channel For More Videos</p>
    //     </div>
    //     <img src={hero_image} alt=''/>
    // </div>
  )
}

export default Banner