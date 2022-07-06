import React, { useState } from 'react'
import Carousel, { Dots,slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
//  import one from '../../Images/amazon1.png'
 import two from '../../Images/partner7.png'
 import three from '../../Images/partner2.png'
 import four from '../../Images/partner3.png'
 import five from '../../Images/partner5.png'
 import one from '../../Images/partner6.png'

export const Sliderr =()=>{
    const [sildes,setSlides] = useState([
        (<img src={one} alt="No" width="100px"/>),
        (<img src={two} alt="yes" width="100px"/>),
        (<img src={three} alt="No" width="100px"/>),
        (<img src={four} alt="yes" width="100px"/>),
        (<img src={five} alt="No" width="100px"/>),
    ]);

    return (
        <Carousel style={{marginTop:"50px",marginBottom:"200px"}}
        slides={sildes}
        plugins={[
            'infinite',
            'autoPlay',
            {
              resolve: slidesToShowPlugin,
              options: {
               numberOfSlides: 5
              }
            },
          ]}   
          animationSpeed={1000}
          breakpoints={{
            640: {
              plugins: [
                'infinite',
               'autoPlay',
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 3
                 }
               },
             ]
            },
            400: {
              plugins: [
                'infinite',
               'autoPlay',
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 2
                 }
               },
             ]
            }
          }}
        />
    );
  };