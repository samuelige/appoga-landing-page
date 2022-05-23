import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Header.scss'
import Banner from "../../components/banner/Banner";
import { data } from "./data";

const Header = () => {
  return (
    <div className="header_container">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
      >
        {
            data.map((item: Record<string, string>, index: number) => (
                <Banner index={index} img={item.img} title={item.title} content={item.content} />
            ))
        }
      </Carousel>

      
    </div>
  )
}

export default Header