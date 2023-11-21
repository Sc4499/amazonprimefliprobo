import React from 'react'
import "./Footer.css"
import footerlogo from "./footer_logo.png"

const Footer = () => {
    return (
        <div className='footerwrapper'>
            <div><img src={footerlogo}></img></div>
            <div className='footernav'>
                <ul>
                    <li><a href="#">Term and Policy Notice</a></li>
                    <li><a href="#">Send us Feedback</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Footer
