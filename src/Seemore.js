import React from 'react'
import "./Seemore.css"
import family2 from "./thegreatindianfamilythbn.jpg"
import boyz2 from "./thbnBoyz4.jpg"
import meg2 from "./meg-2thumbnail.jpg"
import myex2 from "./myexthbn.png"
import jailer from "./215546_thumb_665.jpg"
import rnr from "./rnrthbn.jpg"
import satya from "./satyaprem_ki_kathathbn.jpg"
import tigerrao from "./tiger-nageswara-rao_169639999630.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

const Seemore = () => {


    return (
        <div className="seemoreWrapper">
            <div className="container">
                <h2 className="titleSeemore mb-4">Latest movies</h2>
                <div class="btn-group">
                    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Content Type
                    </button>
                    <ul class="dropdown-menu p-2">
                        <li>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Movies
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Tv Shows
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='container mt-5 '>
                    <div className='row '>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={family2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">

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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>

                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={myex2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'>
                            <div class="card border-0" style={{ width: "17rem" }}>
                                <img src={meg2} class="card-img-top" alt="..." />
                                <div class="card-body cardwrapper">
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
                                    <div className="captiontwoseemore">
                                        <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={boyz2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={jailer} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={rnr} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={satya} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={family2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={tigerrao} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={family2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">

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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>

                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={myex2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'>
                            <div class="card border-0" style={{ width: "17rem" }}>
                                <img src={meg2} class="card-img-top" alt="..." />
                                <div class="card-body cardwrapper">
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
                                    <div className="captiontwoseemore">
                                        <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={boyz2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={jailer} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={rnr} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={satya} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={family2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={tigerrao} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={family2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">

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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>

                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={myex2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'>
                            <div class="card border-0" style={{ width: "17rem" }}>
                                <img src={meg2} class="card-img-top" alt="..." />
                                <div class="card-body cardwrapper">
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
                                    <div className="captiontwoseemore">
                                        <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={boyz2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={jailer} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={rnr} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={satya} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={family2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={tigerrao} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={family2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">

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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>

                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={myex2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'>
                            <div class="card border-0" style={{ width: "17rem" }}>
                                <img src={meg2} class="card-img-top" alt="..." />
                                <div class="card-body cardwrapper">
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
                                    <div className="captiontwoseemore">
                                        <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={boyz2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={jailer} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={rnr} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={satya} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={family2} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-3 margn'><div class="card border-0" style={{ width: "17rem" }}>
                            <img src={tigerrao} class="card-img-top" alt="..." />
                            <div class="card-body cardwrapper">
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
                                <div className="captiontwoseemore">
                                    <p className="moviedesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Seemore
