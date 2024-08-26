import React from 'react'
import './Header.css'
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => {
    return (
        <div className="header app-wrapper section-padding" id="home">
            <div className="wrapper-info">
                <SubHeading title="Chase the new flavour" />
                <h1 className="header-h1">The Key To Fine Dining</h1>
                <p className="p-opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                <button type="button" className="custom-button">Explore Menu</button>
            </div>

            <div className="wrapper-img">
                <img src={images.welcome} alt="header-img" />
            </div>
        </div>
    )
}

export default Header