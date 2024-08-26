import React from 'react'
import './SpecialMenu.css'
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';

const SpecialMenu = () => {
    return (
        <div className="specialMenu flex-center section-padding" id="menu">
            <div className="specialMenu-title">
                <SubHeading title="Menu that fits your palatte" />
                <h1 className="headtext-cormorant">Today&apos;s Special</h1>
            </div>

            <div className="specialMenu-menu">
                <div className="specialMenu-menu-wine  flex-center">
                    <p className="specialMenu-menu-heading">Wine & Beer</p>
                    <div className="specialMenu-menu-items">
                        {data.wines.map((wine, index) => (
                            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
                        ))}
                    </div>
                </div>

                <div className="specialMenu-menu-img">
                    <img src={images.menu} alt="menu-img" />
                </div>

                <div className="specialMenu-menu-cocktails  flex-center">
                    <p className="specialMenu-menu-heading">Cocktails</p>
                    <div className="specialMenu-menu-items">
                        {data.cocktails.map((cocktail, index) => (
                            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ marginTop: 15 }}>
                <button type="button" className="custom-button">View More</button>
            </div>
        </div>
    )
}

export default SpecialMenu