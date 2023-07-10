import React from 'react'
import "./Testimonials.css"
import AVTR1 from "../../assets/avtar1.jpg"
import AVTR2 from "../../assets/avtar2.jpg"
import AVTR3 from "../../assets/avtar3.jpg"
import AVTR4 from "../../assets/avtar4.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: AVTR1,
    title: "Ernest Achiever",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  },
  {
    id: 2,
    image: AVTR2,
    title: "Ernest Achiever",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  },
  {
    id: 3,
    image: AVTR3,
    title: "Ernest Achiever",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  },
  {
    id: 4,
    image: AVTR4,
    title: "Ernest Achiever",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({ id, image, title, review }) => {
            return (
              <SwiperSlide key={id} className='testimonial'>
                <div className="client__avatar">
                  <img src={image} alt={title} />
                </div>
                <h5>{title}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
