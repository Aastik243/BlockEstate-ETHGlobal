import React from 'react'
import './HouseCarousel.css'
import propertyimage from '../../assets/propertyimage2.jpg'
import Searchbox from '../../assets/Search-box.png'
const HouseCarousel = () => {
    return (
        <div className=' container  container-fluid d-flex'>
            <div className="House-section d-flex">
                <img src={propertyimage} />
                <div className="search ">
                    <img src={Searchbox} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HouseCarousel
