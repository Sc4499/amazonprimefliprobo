import React from 'react'
import SimpleSlider from './Slidercarousel'
import "./Movies.css"
import CarouselSlide from './CarouselSlide'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Movies = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/seemore');
    };
    return (
        <div className="bgcontainerwrapper">

            <div className='container bgcontainer pt-4'>
                <h1 className='text-light text-start mb-4'>Movies</h1>
                <SimpleSlider />
            </div>
            <div className='container bgcontainer pt-4'>
                <h5 className='text-light text-start mb-4'><span className='blueText'>Prime</span>{' '}Latest Movies {" "} <button className='seemoreBtn' onClick={handleClick}>See More <FontAwesomeIcon icon={faChevronRight} size="2xs" /></button></h5>
                <CarouselSlide />
            </div>
            <div className='container bgcontainer pt-4'>
                <h5 className='text-light text-start mb-4'><span className='blueText'>Prime</span>{' '}Dramas Movies  {" "} <button className='seemoreBtn' onClick={handleClick}>See More <FontAwesomeIcon icon={faChevronRight} size="2xs" /></button></h5>
                <CarouselSlide />
            </div>
            <div className='container bgcontainer pt-4'>
                <h5 className='text-light text-start mb-4'><span className='blueText'>Prime</span>{' '}Action And Adventure Movies  {" "} <button className='seemoreBtn' onClick={handleClick}>See More <FontAwesomeIcon icon={faChevronRight} size="2xs" /></button></h5>
                <CarouselSlide />
            </div>
            <div className='container bgcontainer pt-4'>
                <h5 className='text-light text-start mb-4'><span className='blueText'>Prime</span>{' '}Comedy Movies  {" "} <button className='seemoreBtn' onClick={handleClick}>See More <FontAwesomeIcon icon={faChevronRight} size="2xs" /></button></h5>
                <CarouselSlide />
            </div>
            <div className='container bgcontainer pt-4'>
                <h5 className='text-light text-start mb-4'><span className='blueText'>Prime</span>{' '}Recentely Added Movies {" "} <button className='seemoreBtn' onClick={handleClick}>See More <FontAwesomeIcon icon={faChevronRight} size="2xs" /></button></h5>
                <CarouselSlide />
            </div>
            <div className='container bgcontainer pt-4'>
                <h5 className='text-light text-start mb-4'><span className='blueText'>Prime</span>{' '}Horror Movies {" "} <button className='seemoreBtn' onClick={handleClick}>See More <FontAwesomeIcon icon={faChevronRight} size="2xs" /></button></h5>
                <CarouselSlide />
            </div>
            <div className='container bgcontainer pt-4'>
                <h5 className='text-light text-start mb-4'><span className='blueText'>Prime</span>{' '}Top Movies {" "} <button className='seemoreBtn' onClick={handleClick}>See More <FontAwesomeIcon icon={faChevronRight} size="2xs" /></button></h5>
                <CarouselSlide />
            </div>
            <div className='container bgcontainer pt-4'>
                <h5 className='text-light text-start mb-4'><span className='blueText'>Prime</span>{' '}Thriller Movies {" "} <button className='seemoreBtn' onClick={handleClick}>See More <FontAwesomeIcon icon={faChevronRight} size="2xs" /></button></h5>
                <CarouselSlide />
            </div>

        </div>

    )
}

export default Movies
