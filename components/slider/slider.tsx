"use client";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { elements } from "./data";
import Image from "next/image";
export default function SliderComponent() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
  };
  return (
    <Slider {...settings}>
      {elements.map((it, index) => (
        <div key={index}>
          <Image
            src={it.image}
            alt={it.id + "" || "Image"}
            width={450}
            height={300}
          />
        </div>
      ))}
    </Slider>
  );
}
