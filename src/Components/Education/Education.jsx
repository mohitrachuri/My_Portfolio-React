import React from 'react'
import '../Education/Education.css'
import UMD from '../../Assets/UMD.jpg'
import SRM from '../../Assets/SRM.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const Education = () => {
  return (
    <section id='Education'>
      <h5>My</h5>
      <h2>Education</h2>

      {/* <Swiper className='container edu__container'>
        
        <SwiperSlide className='edu'>
          <div className="univ__avatar">
            <img src={UMD} alt='UMD'/>
          </div>
            <h4 className='univ__name'>University Of Maryland</h4>
            <small className='univ__course'>Masters in Software Engineering</small>
            <p className='univ__info'>I am currently pursuing my Maters.</p>
        </SwiperSlide>

        <SwiperSlide className='edu'>
          <div className="univ__avatar">
            <img src={SRM} alt='SRM'/>
          </div>
            <h4 className='univ__name'>SRM University</h4>
            <small className='univ__course'>Bachelor's in Electronics and Communication Engineering</small>
            <p className='univ__info'>I completed by bachelor's.</p>
        </SwiperSlide>
      
      
      </Swiper> */}

      {/* <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="edu__container"
      >
        <SwiperSlide className='edu'>
        <div className="univ__avatar">
            <img src={UMD} alt='UMD'/>
          </div>
            <h4 className='univ__name'>University Of Maryland</h4>
            <small className='univ__course'>Masters in Software Engineering</small>
            <p className='univ__info'>I am currently pursuing my Maters.</p>
        </SwiperSlide>

        <SwiperSlide className='edu'>
        <div className="univ__avatar">
            <img src={SRM} alt='SRM'/>
          </div>
            <h4 className='univ__name'>SRM University</h4>
            <small className='univ__course'>Bachelor's in Electronics and Communication Engineering</small>
            <p className='univ__info'>I completed by bachelor's.</p>
        </SwiperSlide>
      </Swiper> */}

<>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='edu__container'
      >
        <SwiperSlide>
        <article className='edu'>
        <div className="univ__avatar">
            <img src={UMD} alt='UMD'/>
          </div>
            <h4 className='univ__name'>University Of Maryland</h4>
            <small className='univ__course'>Masters in Software Engineering</small>
            <p className='univ__info'>August 2021 - Present</p>
          </article>
        </SwiperSlide>
        
        <SwiperSlide>
          <article className='edu'>
        <div className="univ__avatar">
            <img src={SRM} alt='SRM'/>
          </div>
            <h4 className='univ__name'>SRM University</h4>
            <small className='univ__course'>Bachelor's in Electronics and Communication Engineering</small>
            <p className='univ__info'>August 2016 - May 2020</p>
            </article>
        </SwiperSlide>
      </Swiper>
    </>

    </section>
  )
}

export default Education