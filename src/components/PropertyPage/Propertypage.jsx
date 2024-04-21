import React, { useCallback, useState, useEffect } from 'react'
import propertyimage from '../../assets/propertyimage.jpg'
import propertyimage2 from '../../assets/propertyimage2.jpg'
import './PropertyPage.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useRentToOwnContext } from '../../context/RentToOwnContext'
import { useAuth } from '../../context/AuthContext'
const Propertypage = () => {
    const [propertydetails, setpropertydetails] = useState({
        name: '',
        location: '',
        price: 0,
        carpet_area: 0,
        bhk: 0,
        furnished: false,
        rent: 0,
        amenities: [],
        images: [],
        owner_contact: 0,
        owner_address: ''


    })
    const currentAccount = useAuth();

    const {fetchPropertyById} = useRentToOwnContext();
    const fetchProperty = useCallback(async () => {
        const propertyid = window.location.pathname.split('/')[2]
        const details = await fetchPropertyById(propertyid);
        setpropertydetails(details);
    }, [])
    useEffect(() => {
        if (!currentAccount) return;
        fetchProperty()
    }, [fetchProperty])
    const { name, location, price, carpet_area, bhk, furnished, rent, amenities, images, owner_contact, owner_address } = propertydetails;
    return (
        <>
            <Navbar />
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={images[0]} className="d-block " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={images[1]} className="d-block " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={images[2]} className="d-block " alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="property-specs d-flex">
                {name}
            </div>
            <div className="property-specs-2 d-flex justify-content-between">
                <div className="spec">
                    <span>
                        Price
                    </span><br />
                    {price}
                </div>
                <div className="spec">
                    <span>
                        BHK
                    </span>
                    <br />
                    {bhk}
                </div>
                <div className="spec">
                    <span>
                        Carpet Area
                    </span>
                    <br />
                    {carpet_area} Sqft.
                </div>
            </div>
            <div className="txt">
                Property Details :
            </div>
            <div className="property-info d-flex justify-content-between">
                <div className="property-about">
                    {amenities}
                </div>
                <div className="property-detail">
                    <div className="characteristics">
                        <div className="heading">
                            <h3>Brief Characteristics</h3>
                        </div>
                        <div className="characteristics-list">
                            <ul>
                                <li><span>Location:</span> {location}</li>
                                <li><span>Furnished:</span> {(furnished) ? "Yes" : "No"} </li>
                                <li><span>BHK:</span> {bhk} BHK</li>
                                <li><span>Carpet Area:</span> {carpet_area} Sqft</li>

                            </ul>
                        </div>
                    </div>
                    <div className="owner-details">
                        <div className="heading">
                            <h3>Owner Details</h3>
                        </div>
                        <div className="owner-info">
                            <ul>
                                <li><span>address:</span> {owner_address.slice(0, 6)} ... {owner_address.slice(36)} </li>
                                <li><span>Phone:</span> {owner_contact} </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Propertypage
