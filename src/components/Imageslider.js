import React from "react";
import style from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Imageslider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg"></img>
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg"></img>
      </Wrap>
    </Carousel>
  );
}

export default Imageslider;

const Carousel = style(Slider)`
margin-top:20px;
.slick-list{
    overflow:visible;
}

li.slick-active buton:before{
    color:white;
}

ul li button {
&:before{
    font-size:10px;
    color:white;
}
}

button{
    z-index:1;
}

`;

const Wrap = style.div`
img {
width:100%;
height:100%;
border: 4px solid transparent;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 72%) 0px 16px 10px -10px;
transition-duration:300ms;

&:hover{
    border: 4px solid rgba(249,249,249, 0.8)
}
}
`;
