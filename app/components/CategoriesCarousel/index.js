"use client";
import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./style.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const images = [
  "/TopCategories/top categories - 1.png",
  "/TopCategories/top categories - 2.png",
  "/TopCategories/top categories - 3.png",
  "/TopCategories/top categories - 4.png",
  "/TopCategories/top categories - 1.png",
  "/TopCategories/top categories - 2.png",
  "/TopCategories/top categories - 3.png",
  "/TopCategories/top categories - 4.png",
  "/TopCategories/top categories - 1.png",
  "/TopCategories/top categories - 2.png",
  "/TopCategories/top categories - 3.png",
  "/TopCategories/top categories - 4.png",
];

const CategoriesCarousel = () => {
  return (
    <Box>
      <Box className="topcategories--carousel--header">
        <h4 className="carousel--header--heading">Categories</h4>
        <Link href={"#"} className="carousel--header--link">
          See all &#x2192;
        </Link>
      </Box>
      <Carousel
        responsive={responsive}
        showDots
        infinite
        swipeable
        draggable
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel--item"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {images.map((e) => (
          <Box key={e + Math.random()}>
            <Link href={"#"} style={{ textDecoration: "none" }}>
              <Image src={e} width={150} height={150} alt="Top Categories Products" />
              <h3 className="carousel--item--heading">Electronics</h3>
            </Link>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CategoriesCarousel;
