import React from 'react';
import Slider from "react-slick";
import './slider.css';
const slider = () => {
    const settings = {
        arrow: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <div className="slider__wrapper">
        <Slider {...settings}>
            <div>
                <img className="slider__img" src="https://images.unsplash.com/photo-1527685494481-051b439eaa8a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d925a5b2b081263644be051f9e16402e&auto=format&fit=crop&w=1352&q=80" />
            </div>
            <div>
                <img className="slider__img" src="https://images.unsplash.com/photo-1523982440192-e61efd063acb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc2ee9b07827b176beb35c76920f3076&auto=format&fit=crop&w=1416&q=80" />
            </div>
            <div>
                <img className="slider__img" src="https://images.unsplash.com/photo-1524817935500-bb9d3a1dd6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=000a7180f8929b8108e1d35fbe8199dd&auto=format&fit=crop&w=1349&q=80" />
            </div>
            <div>
                <img className="slider__img" src="https://images.unsplash.com/photo-1539755530862-00f623c00f52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e63f057e158f0eb08a5dfa2702b7735&auto=format&fit=crop&w=1350&q=80" />
            </div>
        </Slider>
    </div>
    );
};

export default slider;