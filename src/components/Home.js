import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import media1 from '../assets/images/media1.PNG'
import media2 from '../assets/images/media2.PNG'
import media3 from '../assets/images/media3.PNG'
import media4 from '../assets/images/media4.PNG'
import media5 from '../assets/images/media5.PNG'
import media6 from '../assets/images/media6.PNG'
import media7 from '../assets/images/media7.PNG'
import logo from '../assets/images/logo.svg'

import { FiMail } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { CgTwitter } from 'react-icons/cg'



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function Home() {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div>
                    <img src={media1} style={{ width: '100%' }} />
                    <h1 className='header'><u>WE ARE BREAKING<br />OUR VOW<br />OF SILENCE</u></h1>
                    <p className='para'> In January 2011, after a decade of digital, we opened the doors to our temple.<br />Follow our noble eightfold path to digital enlightenment here.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={media2} style={{ width: '100%' }} />
                    <h1 className='header-two'><u>TALENT IS GIVEN<br />TRUE SKILL IS<br />EARNED</u></h1>
                    <p className='steps'> step 1 out of 8 on the path to digital enlightenment </p>
                    <img className='image' src={logo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={media3} style={{ width: '100%' }} />
                    <h1 className='header-two'><u>BE FLEXIBLE TO<br /> CHANGE AND<br /> STURDY IN<br /> CONVICTION </u></h1>
                    <p className='steps-two'> step 2 out of 8 on the path to digital enlightenment </p>
                    <img className='image' src={logo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={media4} style={{ width: '100%' }} />
                    <h1 className='header-three'><u>USE MANY SKILLS<br /> YET WORK AS ONE</u></h1>
                    <p className='steps-three'> step 3 out of 8 on the path to digital enlightenment </p>
                    <img className='image' src={logo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={media5} style={{ width: '100%' }} />
                    <h1 className='header-three'><u>To MASTER<br /> ANYTHING FIND<br /> INTEREST IN<br /> EVERYTHING</u></h1>
                    <p className='steps-four'> step 4 out of 8 on the path to digital enlightenment </p>
                    <img className='image' src={logo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={media6} style={{ width: '100%' }} />
                    <h1 className='header-three'><u>INDIVIDUALS<br /> FLOURISH<br /> IF CULTURE<br /> AND WISDOM<br /> ARE SHARED</u></h1>
                    <p className='steps-five'> step 5 out of 8 on the path to digital enlightenment </p>
                    <img className='image' src={logo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={media7} style={{ width: '100%' }} />
                    <h1 className='header-two'><u>TRAIN FOR<br /> PERFECTION BUT<br /> AIM FOR MORE</u></h1>
                    <p className='steps'> step 6 out of 8 on the path to digital enlightenment </p>
                    <img className='image' src={logo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={media7} style={{ width: '100%' }} />
                    <h1 className='header-two'><u>TAKE PRIDE IN YOUR<br /> WORK BUT DONOT<br /> SEEK PRAISE</u></h1>
                    <p className='steps'> step 7 out of 8 on the path to digital enlightenment </p>
                    <img className='image' src={logo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={media6} style={{ width: '100%' }} />
                    <h1 className='header-two'><u>TEMPORARY<br /> SACRIFICE BRINGS<br /> LASTING RESULTS</u></h1>
                    <p className='steps'> step 8 out of 8 on the path to digital enlightenment </p>
                    <img className='image' src={logo} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='last-page'>
                    <h1><u>BECOME A MONK</u></h1>
                    <p>Interested in joining our monastery?</p>
                    <p style={{ color: 'white' }}>checkout our current openings on <a>mediamonks.com/careers</a></p>
                    <p><FiMail /> Mail ons <FaFacebookF /> Facebook <CgTwitter /> Twitter </p>
                    <img className='image-last' src={logo} />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Home