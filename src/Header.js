import React from 'react'
import "./Header.css"
import Logo from "./Logo-min.png"
import userprofile from "./622af594fb122296ee65a3bd_User-img.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='headerwrapper'>
            <nav class="navbar navbar-expand-lg p-0">
                <div class="container">
                    <NavLink class="navbar-brand" to="/home"><img className="logo" src={Logo}></img></NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto navlinkmenu mb-lg-0">
                            <li class="nav-item dropdown">
                                <NavLink class="dropdown-toggle hometab" to="/home" >
                                    Home
                                </NavLink>
                                <div class="dropdown-content-home">
                                    <NavLink to="/movie">Movies</NavLink>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Store</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">LiveTv</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <div class="dropdown-content">
                                    <div class="container">
                                        <div className='row justify-content-evenly'>
                                            <div className='col-md-6 textalignment'>
                                                <span className='text-light heading'>Genres</span>
                                                <div className='row'>
                                                    <div className='col-md-6 movielist'>
                                                        <ul>
                                                            <li>Action and Adventure</li>
                                                            <li>Anime</li>
                                                            <li>Comedy</li>
                                                            <li>Documentry</li>
                                                            <li>Drama</li>
                                                            <li>Fantasy</li>
                                                        </ul>
                                                    </div>
                                                    <div className='col-md-6 movielist'>
                                                        <ul>
                                                            <li>Horror</li>
                                                            <li>Kids</li>
                                                            <li>Mystery and Thriller</li>
                                                            <li>Romance</li>
                                                            <li>Science fiction</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4 textalignment'>
                                                <span className='text-light heading'>Features cllections</span>
                                                <div className='row'>
                                                    <div className='col-md-6 movielist'>
                                                        <ul>
                                                            <li>Hindi</li>
                                                            <li>English</li>
                                                            <li>Tamil</li>
                                                            <li>Talugu</li>
                                                            <li>Malayalam</li>
                                                        </ul>
                                                    </div>
                                                    <div className='col-md-6 movielist'>
                                                        <ul>
                                                            <li>Kannad</li>
                                                            <li>Marathi</li>
                                                            <li>Punjabi</li>
                                                            <li>Gujrati</li>
                                                            <li>Bangali</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </li>
                        </ul>
                        <ul class="navbar-nav  navlinkmenu mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </a>
                                <ul class="dropdown-menu searchbox">
                                    <form>
                                        <div className='formwrapper'>
                                            <span><FontAwesomeIcon className="searchicon" icon={faMagnifyingGlass} /></span> <input className="serchinput" placeholder='search' type='text'></input>
                                        </div>
                                    </form>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-disabled="true">Try for free</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    EN
                                </a>
                                <div class="dropdown-content-two">
                                    <div class="container">
                                        <div className='row justify-content-evenly'>
                                            <div className='col-md-6 textalignment'>
                                                <span className='text-light heading'>Genres</span>
                                                <div className='row'>
                                                    <div className='col-md-6 movielist'>
                                                        <ul>
                                                            <li>Action and Adventure</li>
                                                            <li>Anime</li>
                                                            <li>Comedy</li>
                                                            <li>Documentry</li>
                                                            <li>Drama</li>
                                                            <li>Fantasy</li>
                                                        </ul>
                                                    </div>
                                                    <div className='col-md-6 movielist'>
                                                        <ul>
                                                            <li>Horror</li>
                                                            <li>Kids</li>
                                                            <li>Mystery and Thriller</li>
                                                            <li>Romance</li>
                                                            <li>Science fiction</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4 textalignment'>
                                                <span className='text-light heading'>Features cllections</span>
                                                <div className='row'>
                                                    <div className='col-md-6 movielist'>
                                                        <ul>
                                                            <li>Hindi</li>
                                                            <li>English</li>
                                                            <li>Tamil</li>
                                                            <li>Talugu</li>
                                                            <li>Malayalam</li>
                                                        </ul>
                                                    </div>
                                                    <div className='col-md-6 movielist'>
                                                        <ul>
                                                            <li>Kannad</li>
                                                            <li>Marathi</li>
                                                            <li>Punjabi</li>
                                                            <li>Gujrati</li>
                                                            <li>Bangali</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-disabled="true"><img className="userpic" src={userprofile}></img></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Header
