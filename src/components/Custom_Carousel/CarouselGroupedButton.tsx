import React from 'react'
import "./CarouselGrpBtn.scss"
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const CarouselGroupedButton = ({ next, previous } : any) => {
    return (
        <section className="carousel_btn_container">
            <button onClick={previous}>
                <HiChevronLeft className='text-2xl text-migdayyellow' />
            </button>
            <div/>
            <button className='' onClick={next}>
                <HiChevronRight className='text-2xl text-migdayyellow' />
            </button>
        </section>
    )
}

export default CarouselGroupedButton
