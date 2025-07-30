import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import styles from "./styles.module.css";

export function Slider() {
  const imageSrcArray = [
    "img-1.jpg",
    "img-2.jpg",
    "img-3.jpg",
    "img-4.jpg",
    "img-5.jpg",
    "img-6.png",
    "img-7.jpg",
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {imageSrcArray.map((src, i) => {
          return (
            <SwiperSlide key={i}>
              <img
                className={styles["slider-img"]}
                src={"/slider/" + src}
                alt="slider-image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
