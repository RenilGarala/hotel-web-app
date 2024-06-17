import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className="rightFoot">
                    <div className='footLogo'>
                        <img src="src/assets/logo.png" alt="logo" className='footLogo'></img>
                        <div className='cname'>roomBooking</div>
                    </div>
                </div>
                <div className="leftFoot">

                    <div className='footerInformation'>
                        <h4 className='footerHeading'>Information</h4>
                        <div className="infoDetail links">
                            <a href='#'>Home</a>
                            <a href='#'>Explore</a>
                            <a href='#'>Travel</a>
                            <a href='#'>Blog</a>
                        </div>
                    </div>

                    <div className='footerHLink'>
                        <h4 className='footerHeading'>Helpful Link</h4>
                        <div className="linkDetail links">
                            <a href='#'>Destination</a>
                            <a href='#'>Support</a>
                            <a href='#'>travel & Condition</a>
                            <a href='#'>Privacy</a>
                        </div>
                    </div>

                    <div className='footerContact'>
                        <h4 className='footerHeading'>Contact</h4>
                        <div className="contactDetail links">
                            <a href='#'>+91 1233218292</a>
                            <a href='#'>12345@gmail.com</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
