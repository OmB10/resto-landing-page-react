import React from 'react'
import './NewsLetter.css'
import SubHeading from '../SubHeading/SubHeading'

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <div className="newsletter-heading">
                <SubHeading title="Newsletter" />
                <h1 className="headtext-cormorant">Subscribe To Our Newsletter</h1>
                <p className="p-opensans">And never miss latest Updates!</p>
            </div>
            <div className="newsletter-input flex-center">
                <input type="email" placeholder="Enter your email address" />
                <button type="button" className="custom-button">Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter