import styles from "./Carousel.module.scss";
import "swiper/scss";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Navigation } from "swiper";
import { swiper_data } from "./data";
import React from "react";

register();

export default function Carousel(): JSX.Element {
  const swiperElRef = useRef(null);

  const handleProgress = (e) => {
    const [swiper, progress] = e.detail;
    console.log(progress);
  };

  const handleSlideChange = () => {
    console.log("slide changed");
  };

  useEffect(() => {
    const swiperEl = swiperElRef.current;
    swiperEl.addEventListener("progress", handleProgress);
    swiperEl.addEventListener("slidechange", handleSlideChange);

    return () => {
      swiperEl.removeEventListener("progress", handleProgress);
      swiperEl.removeEventListener("slidechange", handleSlideChange);
    };
  }, []);

  return (
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
      {swiper_data.map((slide, idx) => (
        <swiper-slide key={idx}>
          <main className={styles["overlay-buttons"]}>
            <button className={styles["image-swiper-button-prev"]}></button>
            <button className={styles["image-swiper-button-next"]}></button>
          </main>
          <div className={styles["img-wrapper"]}>
            <img className={styles.img} src={slide.img} alt="" />
            {slide.titles && (
              <div className={styles["carousel--wrapper"]}>
                <div
                  dangerouslySetInnerHTML={{ __html: slide.titles.first }}
                ></div>
                <div className={styles["second-div"]}>
                  {slide.titles.second}
                  <span>
                    <img
                      className={`ml-3 ${styles.img}`}
                      src="/svg/right-arrow.svg"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            )}
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
