'use client'
import Image from "next/image";
import Link from "next/link";
import { Box } from '@mui/material'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.css'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const images = [
    "/placeholder.png",
    "/placeholder.png",
    "/placeholder.png",

  ];


const HeaderCarousel = () => (
    <Box>
        <Carousel
        responsive={responsive}
        showDots
        infinite
        swipeable
        draggable
        centerMode={true}
        focusOnSelect
        afterChange={(previousSlide, { currentSlide, onMove }) => {
            console.log({previousSlide, currentSlide, onMove})
        }}
        // arrows={false}
        containerClass="header--carousel-container"
        dotListClass="header--custom-dot-list-style"
        itemClass="header--carousel--item"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {images.map((e) => (
          <Box key={e + Math.random()}>
            <Link href={"#"} style={{ textDecoration: "none" }}>
              <Image src={e} width={971} height={472} alt="Header Carousel" />
            </Link>
          </Box>
        ))}
      </Carousel>
    </Box>
)

export default HeaderCarousel;