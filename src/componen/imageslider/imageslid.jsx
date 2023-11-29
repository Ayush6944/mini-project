import React from "react";
import images from "./image";
import ImageSlider from "./ImageSlider";

export default function Sliderimg(){
    return (
        <div className="imuggu">
            <ImageSlider images={images} />
        </div>
    );
}