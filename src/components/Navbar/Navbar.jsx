import React, { useState } from 'react'
import './navbar.css'
import { images } from '../../constants';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src={images.logo} alt="logo" />
            </div>
            <ul className='navbar-links'>
                <li className='p-opensans'><a href="#home">Home</a></li>
                <li className='p-opensans'><a href="#about">About</a></li>
                <li className='p-opensans'><a href="#menu">Menu</a></li>
                <li className='p-opensans'><a href="#awards">Awards</a></li>
                <li className='p-opensans'><a href="#contact">Contacts</a></li>
            </ul>
            <div className='navbar-login'>
                <a href="#logim" className='p-opensans' >Log In / Register</a>
                <div />
                <a href="/" className='p-opensans'>Book Table</a>
            </div>
            <div className='navbar-smallscreen'>
                <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className='navbar-smallscreen-overlay flex-center slide-bottom'>
                        <MdOutlineRestaurantMenu fontSize={27} className='overlay-close' onClick={() => setToggleMenu(false)} />
                        <ul className='navbar-smallscreen-links'>
                            <li className='p-opensans'><a href="#home">Home</a></li>
                            <li className='p-opensans'><a href="#about">About</a></li>
                            <li className='p-opensans'><a href="#menu">Menu</a></li>
                            <li className='p-opensans'><a href="#awards">Awards</a></li>
                            <li className='p-opensans'><a href="#contact">Contacts</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar