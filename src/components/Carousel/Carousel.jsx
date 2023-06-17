import "./Carousel.scss";
import "swiper/scss";
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { Navigation } from "swiper";
import { swiper_data } from "./data";

register();


export default function Carousel () {
    const swiperElRef = useRef(null);  
    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('progress', (e) => {
          const [swiper, progress] = e.detail;
          console.log(progress);
        });
    
        swiperElRef.current.addEventListener('slidechange', (e) => {
          console.log('slide changed');
        });
      }, []);


    return(
  <swiper-container
    ref={swiperElRef}
    modules={Navigation}
    slides-per-view="1"
    allow-touch-move="true"
    prevent-interaction-on-transition="false"
    navigation="false"
    space-between="0"
    centered-slides="true"
    loop="true"
    breakpoints-768-prevent-interaction-on-transition="true"
breakpoints-768-allow-touch-move="false"
breakpoints-768-slides-per-view="1.2"
breakpoints-768-navigation-next-el=".image-swiper-button-next"
breakpoints-768-navigation-prev-el=".image-swiper-button-prev"
        

  >
 {swiper_data.map( (slide,idx) => {
    return (
        <swiper-slide key={idx}>
        <main className="overlay-buttons">
          <button className="image-swiper-button-prev"></button>
          <button className="image-swiper-button-next"></button>
        </main>
        <div className="img-wrapper">
          <img src={slide.img} alt="" />
          {slide.titles && (
            <div className="carousel--wrapper">
            <div dangerouslySetInnerHTML={{ __html: slide.titles.first }}></div>
            <div className="second-div">
              { slide.titles.second}<span
                ><img className="ml-3" src="/svg/right-arrow.svg" alt=""
              /></span>
            </div>
          </div>
          ) }
        </div>
      </swiper-slide>
    )
 })}
  </swiper-container>
    )
}