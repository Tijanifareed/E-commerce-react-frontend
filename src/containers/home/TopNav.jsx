import React, { useState } from 'react'
import Input from '../../components/Input';
import SearchIcon from '../../assets/images/SearchIcon.png';
import CartIcon from '../../assets/images/CartIcon.png';
import DropdownIcon from '../../assets/images/DropdownIcon.png';
import ProfileImage from '../../assets/images/ProfileIcon.png';
import './style/TopNav.css';

const TopNav = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (e) => {
        console.log("searchValue 1 --> ", e.target.value);
        setSearchValue(e.target.value);
    }

    console.log("searchValue 2 --> ", searchValue);
    
  return (
    <div className='topnav_container'>
        <p className='topnav_logo'>{searchValue}</p>
        <ul className='topnav_List'>

            <li className='List_items'>
                <span className="ShopLogo">SHOP.CO</span>
                <span>Shop</span>
                <img src={DropdownIcon} alt="DropdownIcon"/>
            </li>
            <li className='List_items'>On Sale</li>
            <li className='List_items'>New Arrivals</li>
            <li className='List_items'>Brands</li>
        </ul>
        <div className='topnav_input'>
            <Input
                image={SearchIcon}
                type='text'
                placeholder='Search for products...'
                value={searchValue}
                onChange={(e) => handleSearch(e)}
            />
        </div>
        <div className='topnav_cart_container'>
            <img className='cart_container_first' src={CartIcon} alt="CartIcon" />
            <img className='cart_container_second' src={ProfileImage} alt="ProfileIcon" />
        </div>
    </div>
  )
}

export default TopNav