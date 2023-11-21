import React from 'react'
import "./Hero.css"
import item1 from "./Lionsgate.jpg"
import item2 from "./Discovery.jpg"
import item3 from "./BBC_PLAYER.png"
import item4 from "./MANORAMAMAX.jpg"
import item5 from "./hoichoi.jpg"
import item6 from "./Chaupal.png"
import item7 from "./Amc.png"
import item8 from "./Erosnow.jpg"
import item9 from "./Mubi.jpg"
import item10 from "./Vrott.png"
import item11 from "./Stingray.png"
import item12 from "./Docubay.jpg"




const Hero = () => {
    return (
        <>
            <div className="bannerwrapper">
                <div className="bannerimg">
                    <h1>Welcome to Prime Video</h1>
                    <p>Watch the latest movies, TV shows, and award-winning Amazon Originals</p>
                    <button className='joinbtn'>Sign in to join Prime</button>
                </div>
            </div>
            <div className="bannerrentwrapper">
                <div className="bannerimg">
                    <h1 className='fw-medium'>Movie rentals on Prime Video</h1>
                    <p>Early Access to new movies, before digital subscription</p>
                    <button className='joinbtn mt-4'>Rent Now</button>
                </div>
            </div>
            <div className='channerwrapper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 channel'>

                            <h1>Your favorite channels all in one place</h1>
                            <p>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice

                            </p>


                        </div>
                        <div className='col-md-6'>
                            <div className='flexwrapper'>
                                <div className='item1'>
                                    <img src={item1} alt="image"></img>
                                </div>
                                <div className='item1'>
                                    <img src={item2} alt="image"></img>
                                </div>
                                <div className='item1'>
                                    <img src={item3} alt="image"></img>
                                </div>
                                <div className='item1'>
                                    <img src={item4} alt="image"></img>
                                </div>
                                <div className='item1'>
                                    <img src={item5} alt="image"></img>
                                </div>
                                <div className='item1'>
                                    <img src={item6} alt="image"></img>
                                </div>
                                <div className='item1'>
                                    <img src={item7} alt="image"></img>
                                </div>
                                <div className='item1'>
                                    <img src={item8} alt="image"></img>
                                </div>
                                <div className='item1'>
                                    <img src={item9} alt="image"></img>
                                </div>
                                <div className='item1'>
                                    <img src={item10} alt="image"></img>
                                </div>
                                <div className='item1'>
                                    <img src={item11} alt="image"></img>
                                </div>
                                <div className='item1'>
                                    <img src={item12} alt="image"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='firetvwrapper'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-md-7'>

                        </div>
                        <div className='col-md-5 firetvbox'>

                            <h1>Even better with Fire TV Stick</h1>
                            <p>The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.
                            </p>
                            <button className='joinbtn'>Get Started</button>

                        </div>
                    </div>

                </div>

            </div>
            <div className="bannerrentwrapper-two ">
                <div className="bannerimg">
                    <h1 className='fw-medium'>Family Friendly</h1>
                    <p>With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.</p>
                    <button className='joinbtn mt-4'>Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Hero
