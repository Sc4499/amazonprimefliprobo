import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import family from "./The-Great-Indian-Family.jpg"
import boyz from "./20231019_Banner_boys4_l20231019.jpg"
import meg from "./meg-trench.jpg"
import myex from "./1471847550_congrats-my-ex-l.jpg"
import "./Slider.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        />
    );
}
export default function SimpleSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <div>
            <Slider {...settings}>
                <div className="Box" >
                    <div className="heroswiper">
                        <img src={family} alt="movie" />
                    </div>

                    <div className="captionwrapper">
                        <div className="caption">
                            <span className="capicon"><FontAwesomeIcon icon={faCheck} /></span><span className="textline">Watch with a free Prime trial</span><span className="content">U/A 13+</span>
                        </div>
                        <div className="caption">
                            <button className="morebtn">More Details</button> <span className="watchlist"><FontAwesomeIcon icon={faPlus} /></span>
                        </div>
                    </div>
                </div>
                <div className="Box" >
                    <div className="heroswiper">
                        <img src={meg} alt="movie" />
                    </div>
                    <div className="captionwrapper">
                        <div className="caption">
                            <span className="capicon"><FontAwesomeIcon icon={faCheck} /></span><span className="textline">Watch with a free Prime trial</span><span className="content">U/A 13+</span>
                        </div>
                        <div className="caption">
                            <button className="morebtn">More Details</button> <span className="watchlist"><FontAwesomeIcon icon={faPlus} /></span>
                        </div>
                    </div>
                </div>
                <div className="Box" >
                    <div className="heroswiper">
                        <img src={boyz} alt="movie" />
                    </div>
                    <div className="captionwrapper">
                        <div className="caption">
                            <span className="capicon"><FontAwesomeIcon icon={faCheck} /></span><span className="textline">Watch with a free Prime trial</span><span className="content">U/A 13+</span>
                        </div>
                        <div className="caption">
                            <button className="morebtn">More Details</button> <span className="watchlist"><FontAwesomeIcon icon={faPlus} /></span>
                        </div>
                    </div>
                </div>
                <div className="Box" >
                    <div className="heroswiper">
                        <img src={myex} alt="movie" />
                    </div>
                    <div className="captionwrapper">
                        <div className="caption">
                            <span className="capicon"><FontAwesomeIcon icon={faCheck} /></span><span className="textline">Watch with a free Prime trial</span><span className="content">U/A 13+</span>
                        </div>
                        <div className="caption">
                            <button className="morebtn">More Details</button> <span className="watchlist"><FontAwesomeIcon icon={faPlus} /></span>
                        </div>
                    </div>
                </div>


            </Slider>
        </div>

    );
}