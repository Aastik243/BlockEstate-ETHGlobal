import React from 'react'
import propertyimage from '../../assets/propertyimage.jpg'
import './Displaycard.css'
import Carpetarea from '../../assets/carpetarea.png'
import bhk from '../../assets/BHK.png'
import { Link, BrowserRouter } from 'react-router-dom'
const Displaycards = () => {
    return (
        <>
            <BrowserRouter>
                <Link href="/">

                    <div className="card" style={{ "width": "21rem" }}>
                        <img className="card-img-top container " src={propertyimage} alt="Card image cap" />
                        <div className="card-body">
                            <div className="card-text description">Oceanic Heights -
                                Luxury Seaview Apartment</div>
                            <div className="location" style={{ "font-size": "18px", "fontFamily": "poppins", "marginTop": "10px", "fontWeight": "100" }}>
                                Bandra West, Mumbai
                            </div>
                            <div className="amenities d-flex justify-content-between" style={{ "marginTop": "5px" }}>
                                <div className="carpet-area" style={{ "color": "#888888" }} >
                                    <img src={Carpetarea} alt="" />
                                    <span style={{ "fontSize": "15px" }}>1800 Sqft.</span>
                                </div>
                                <div className="BHK" style={{ "color": "#888888" }} >
                                    <img src={bhk} alt="" />
                                    <span style={{ "fontSize": "15px" }}>3 BHK</span>
                                </div>
                            </div>
                        </div>
                    </div>



                </Link>
            </BrowserRouter>


        </>
    )
}

export default Displaycards
