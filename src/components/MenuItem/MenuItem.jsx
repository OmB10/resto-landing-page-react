import React from 'react'
import './MenuItem.css'

const MenuItem = ({ title, price, tags }) => {
    return (
        <div className="menuitem">
            <div className="menuitem-head">
                <div className="menuitem-name">
                    <p className="p-cormorant" style={{ color: '#DCCA87' }}>{title}</p>
                </div>
                <div className="menuitem-dash" />
                <div className="menuitem-price">
                    <p className="p-cormorant">{price}</p>
                </div>
            </div>

            <div className="menuitem-sub">
                <p className="p-opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
            </div>
        </div>
    )
}

export default MenuItem