import React from 'react'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import './Header.css';
import { images, data } from '../../constants';

function Header() {
    return (
        <header>
            {/* logo */}
            <img src={images.logo} className="logo" alt="Food Logo" />

            {/* search input */}
            <div className="inputBox">
                <SearchRoundedIcon className='SearchIcon' />
                <input type="text" placeholder='Search' />
            </div>

            {/* cart icon */}
            <div className="shoppingCart">
                <ShoppingCartRoundedIcon className='CartIcon' />
                <div className="cart_content">
                    <p>2</p>
                </div>
            </div>

            {/* profile */}
            <div className="profileContainer">
                {/* profile image */}
                <div className="imgBox">
                    <img src={data['user'].user_img} className="Profile_pic" alt="Profile pic" />
                </div>

                {/* user name */}
                <h2 className='userName'>Ahmed</h2>
            </div>

            {/* menu btn */}
            <div className="toggleMenu">
                <BarChartRoundedIcon className='toggleIcon' />
            </div>

        </header>
    )
}

export default Header;