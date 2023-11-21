import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import family2 from "./thegreatindianfamilythbn.jpg"
import boyz2 from "./thbnBoyz4.jpg"
import meg2 from "./meg-2thumbnail.jpg"
import myex2 from "./myexthbn.png"
import jailer from "./215546_thumb_665.jpg"
import rnr from "./rnrthbn.jpg"
import satya from "./satyaprem_ki_kathathbn.jpg"
import tigerrao from "./tiger-nageswara-rao_169639999630.jpg"
import "./Carousel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons'


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
export default function CarouselSlide() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <div className="sliderWrapper">
            <Slider {...settings}>
                <div className="CarouselBox" >
                    <div className="movieBanner">
                        <img src={family2} alt="movie" />
                    </div>
                    <div className="captionwrappertwo">
                        <div className="captiontwo">
                            <p className="textlinetwo"><span className="capicontwo"><FontAwesomeIcon icon={faCheck} /></span>Watch with a free Prime trial</p>
                            <div className="titleandwish">
                                <div >
                                    <h5>The great indian family</h5>
                                </div>
                                <div className="wishbox">
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faPlus} /></span>
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faFilm} /></span>
                                </div>

                            </div>
                            <p className="mt-2"> <span className="houryr">2023 {" "} 2h 30min {" "}</span><span className="contenttwo">U/A 13+</span></p>
                        </div>
                        <div className="captiontwo">
                            <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className="CarouselBox" >
                    <div className="movieBanner">
                        <img src={meg2} alt="movie" />
                    </div>
                    <div className="captionwrappertwo">
                        <div className="captiontwo">
                            <p className="textlinetwo"><span className="capicontwo"><FontAwesomeIcon icon={faCheck} /></span>Watch with a free Prime trial</p>
                            <div className="titleandwish">
                                <div >
                                    <h5>MEG RENCH 2</h5>
                                </div>
                                <div className="wishbox">
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faPlus} /></span>
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faFilm} /></span>
                                </div>

                            </div>
                            <p className="mt-2"> <span className="houryr">2023 {" "} 2h 30min {" "}</span><span className="contenttwo">U/A 13+</span></p>
                        </div>
                        <div className="captiontwo">
                            <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className="CarouselBox" >
                    <div className="movieBanner">
                        <img src={boyz2} alt="movie" />
                    </div>
                    <div className="captionwrappertwo">
                        <div className="captiontwo">
                            <p className="textlinetwo"><span className="capicontwo"><FontAwesomeIcon icon={faCheck} /></span>Watch with a free Prime trial</p>
                            <div className="titleandwish">
                                <div >
                                    <h5>Boyz 4</h5>
                                </div>
                                <div className="wishbox">
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faPlus} /></span>
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faFilm} /></span>
                                </div>

                            </div>
                            <p className="mt-2"> <span className="houryr">2023 {" "} 2h 30min {" "}</span><span className="contenttwo">U/A 13+</span></p>
                        </div>
                        <div className="captiontwo">
                            <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className="CarouselBox" >
                    <div className="movieBanner">
                        <img src={myex2} alt="movie" />
                    </div>
                    <div className="captionwrappertwo">
                        <div className="captiontwo">
                            <p className="textlinetwo"><span className="capicontwo"><FontAwesomeIcon icon={faCheck} /></span>Watch with a free Prime trial</p>
                            <div className="titleandwish">
                                <div >
                                    <h5>Congrats my EX</h5>
                                </div>
                                <div className="wishbox">
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faPlus} /></span>
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faFilm} /></span>
                                </div>

                            </div>
                            <p className="mt-2"> <span className="houryr">2023 {" "} 2h 30min {" "}</span><span className="contenttwo">U/A 13+</span></p>
                        </div>
                        <div className="captiontwo">
                            <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className="CarouselBox" >
                    <div className="movieBanner">
                        <img src={jailer} alt="movie" />
                    </div>
                    <div className="captionwrappertwo">
                        <div className="captiontwo">
                            <p className="textlinetwo"><span className="capicontwo"><FontAwesomeIcon icon={faCheck} /></span>Watch with a free Prime trial</p>
                            <div className="titleandwish">
                                <div >
                                    <h5>Jailer</h5>
                                </div>
                                <div className="wishbox">
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faPlus} /></span>
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faFilm} /></span>
                                </div>

                            </div>
                            <p className="mt-2"> <span className="houryr">2023 {" "} 2h 30min {" "}</span><span className="contenttwo">U/A 13+</span></p>
                        </div>
                        <div className="captiontwo">
                            <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className="CarouselBox" >
                    <div className="movieBanner">
                        <img src={satya} alt="movie" />
                    </div>
                    <div className="captionwrappertwo">
                        <div className="captiontwo">
                            <p className="textlinetwo"><span className="capicontwo"><FontAwesomeIcon icon={faCheck} /></span>Watch with a free Prime trial</p>
                            <div className="titleandwish">
                                <div >
                                    <h5>Styaprem ki katha</h5>
                                </div>
                                <div className="wishbox">
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faPlus} /></span>
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faFilm} /></span>
                                </div>

                            </div>
                            <p className="mt-2"> <span className="houryr">2023 {" "} 2h 30min {" "}</span><span className="contenttwo">U/A 13+</span></p>
                        </div>
                        <div className="captiontwo">
                            <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className="CarouselBox" >
                    <div className="movieBanner">
                        <img src={tigerrao} alt="movie" />
                    </div>
                    <div className="captionwrappertwo">
                        <div className="captiontwo">
                            <p className="textlinetwo"><span className="capicontwo"><FontAwesomeIcon icon={faCheck} /></span>Watch with a free Prime trial</p>
                            <div className="titleandwish">
                                <div >
                                    <h5>Tiger</h5>
                                </div>
                                <div className="wishbox">
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faPlus} /></span>
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faFilm} /></span>
                                </div>

                            </div>
                            <p className="mt-2"> <span className="houryr">2023 {" "} 2h 30min {" "}</span><span className="contenttwo">U/A 13+</span></p>
                        </div>
                        <div className="captiontwo">
                            <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className="CarouselBox" >
                    <div className="movieBanner">
                        <img src={rnr} alt="movie" />
                    </div>

                    <div className="captionwrappertwo">
                        <div className="captiontwo">
                            <p className="textlinetwo"><span className="capicontwo"><FontAwesomeIcon icon={faCheck} /></span>Watch with a free Prime trial</p>
                            <div className="titleandwish">
                                <div >
                                    <h5>Rocky and Rani</h5>
                                </div>
                                <div className="wishbox">
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faPlus} /></span>
                                    <span className="watchlisttwo"><FontAwesomeIcon icon={faFilm} /></span>
                                </div>

                            </div>
                            <p className="mt-2"> <span className="houryr">2023 {" "} 2h 30min {" "}</span><span className="contenttwo">U/A 13+</span></p>
                        </div>
                        <div className="captiontwo">
                            <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>


            </Slider>
        </div>

    );
}