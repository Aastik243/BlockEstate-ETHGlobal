import React from 'react'
import propertyimage from '../../assets/propertyimage.jpg'
import './Displaycard.css'
import { Link, BrowserRouter } from 'react-router-dom'
const Displaycards = ({ price, carpetarea, BHK, image }) => {
    return (
        <>
            <BrowserRouter>
                <Link href="/">
                    <div className="card" style={{ "width": "18rem" }}>
                        <img className="card-img-top" src={propertyimage} alt="Card image cap" />
                        <div className="card-body">
                            <div className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                            <div className="furnished"></div>
                            <div className="carpet-area"></div>
                            <div className="BHK"></div>
                            <div className="price"></div>
                        </div>
                    </div>
                </Link>
            </BrowserRouter>


        </>
    )
}

export default Displaycards
