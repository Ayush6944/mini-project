// Filename - ImageSlider.js

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./imuggu.css";
// import images from "./image";
import React from "react";
import Product from "../product/product";
import { Link } from "react-router-dom";

const ImageSlider = ({ images }) => {
	const settings = {
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		autoplay: true,
		autoplaySpeed: 2000,
	};
	return (
		<>
			<div className="tag">
				{/* <h1>Image Gallery</h1> */}
			</div>
			<div className="imgslider"   onClick="location.href='/products'">
				<Slider {...settings} >
					{images.map((item) => (
						<div key={item.id}>
							<Link to='/products'>
							<img 
								src={item.src}
								alt={item.alt}
							/></Link>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};
export default ImageSlider;
