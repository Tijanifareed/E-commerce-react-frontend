import React, { useState} from 'react'
import './style/Hero.css'
import manAndWoman from "../../assets/images/front-view-fashionable-couple.png";
import tshirt from "../../assets/images/T-shirt.png";



const Hero = () => {
    return (


        <div className="contain">
            <div className="container">
                <div className="hero">
                    <p className="find_clothes">FIND CLOTHES <br/> THAT MATCHES<br/> YOUR STYLE</p>
                    <p className="browse">Browse through our diverse range of meticulously crafted garments,
                        designed<br/>to
                        bring out your individuality and cater to your sense of style</p>
                    <button className="shop">Shop Now</button>
                    <div className="num">
                        <p className="nu">200+</p>
                        <p className="nu">2,000+</p>
                        <p className="nu">30,000+</p>
                    </div>
                    <div className="small_talks">
                        <p>International Brands</p>
                        <p>High-Quality Products</p>
                        <p>Happy Customers</p>
                    </div>
                </div>
                <div>
                    <img className='man_and_woman' src={manAndWoman} alt="fashonManAndWoman"/>
                </div>

            </div>
            <div className="blackss">
                <h1 className="versace">VERSACE</h1>
                <h1>ZARA</h1>
                <h1>GUCCI</h1>
                <h1>PRADA</h1>
                <h1>Calvin Klein</h1>
            </div>



        </div>

    );


}


export default Hero