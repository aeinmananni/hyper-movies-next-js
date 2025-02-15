"use client";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { elements } from "./data";
import Image from "next/image";
import { useStoreHyperMovies } from "@/store/store";
import backgroundImage from "../../images/poster-background.jpg";
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
  const setImage = useStoreHyperMovies((s) => s.setImage);

  return (
    <Slider {...settings}>
      {elements.map((it, index) => (
        <div key={index}>
          <Image
            onMouseEnter={() => setImage(it.image)}
            onMouseLeave={() => setImage(backgroundImage.src)}
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
