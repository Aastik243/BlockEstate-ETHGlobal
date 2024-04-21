import React from 'react'
import propertyimage from '../../assets/propertyimage.jpg'
import './Displaycard.css'
import Carpetarea from '../../assets/carpetarea.png'
import BHK from '../../assets/BHK.png'

import { useNavigate } from 'react-router-dom'
const Displaycards = ({ key, property }) => {
    const { name, bhk, location, carpet_area, property_index } = property;
    const navigate = useNavigate()
    return (
        <>

            <div className="card" style={{ "width": "21rem" }} onClick={navigate(`/PropertyDetails/${property_index}`)}>
                <img className="card-img-top container " src={propertyimage} alt="Card image cap" />
                <div className="card-body">
                    <div className="card-text description">{name}</div>
                    <div className="location" style={{ "font-size": "18px", "fontFamily": "poppins", "marginTop": "10px", "fontWeight": "100" }}>
                        {location}
                    </div>
                    <div className="amenities d-flex justify-content-between" style={{ "marginTop": "5px" }}>
                        <div className="carpet-area" style={{ "color": "#888888" }} >
                            <img src={Carpetarea} alt="" />
                            <span style={{ "fontSize": "15px" }}>{carpet_area} Sqft.</span>
                        </div>
                        <div className="BHK" style={{ "color": "#888888" }} >
                            <img src={BHK} alt="" />
                            <span style={{ "fontSize": "15px" }}>{bhk} BHK</span>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Displaycards
