import React from 'react'
import propertyimage from '../../assets/propertyimage.jpg'
import propertyimage2 from '../../assets/propertyimage2.jpg'
import './PropertyPage.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Propertypage = () => {
    return (
        <>
            <Navbar />
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={propertyimage} className="d-block " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={propertyimage} className="d-block " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={propertyimage} className="d-block " alt="..." />
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
                Oceanic Heights -
                Luxury Seaview Apartment
            </div>
            <div className="property-specs-2 d-flex justify-content-between">
                <div className="spec">
                    <span>
                        Price
                    </span><br />
                    4,50,00,000
                </div>
                <div className="spec">
                    <span>
                        BHK
                    </span>
                    <br />
                    3
                </div>
                <div className="spec">
                    <span>
                        Carpet Area
                    </span>
                    <br />
                    1800 Sqft.
                </div>
            </div>
            <div className="txt">
                Property Details :
            </div>
            <div className="property-info d-flex justify-content-between">
                <div className="property-about">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quo illum impedit optio dignissimos, aperiam dolor, molestias itaque nemo labore aliquam facere quasi. Ullam eligendi quas, excepturi modi recusandae hic.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore obcaecati exercitationem consequatur hic non rem tenetur, architecto labore id accusantium mollitia! Eveniet neque adipisci excepturi autem vero nihil cum laudantium?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eius, obcaecati enim, explicabo autem ab maxime exercitationem, voluptates quas dolor nesciunt labore accusamus. Optio velit harum pariatur quos illo. Recusandae?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut, cum quo officiis in nisi odit nemo dolores quidem vero porro cupiditate, necessitatibus velit rerum aspernatur, nobis accusantium non incidunt?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolore distinctio placeat, aliquam voluptatum ex eos quibusdam error minima. Eos voluptates temporibus consequuntur mollitia velit sunt non ipsum odit quasi?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. A iste eos molestias odit ex unde culpa accusantium accusamus quis, ad deserunt harum modi. Quibusdam reiciendis ad voluptates pariatur, itaque accusamus?
                </div>
                <div className="property-detail">
                    <div className="characteristics">
                        <div className="heading">
                            <h3>Brief Characteristics</h3>
                        </div>
                        <div className="characteristics-list">
                            <ul>
                                <li><span>Location:</span> Mumbai</li>
                                <li><span>Furnished:</span> yes</li>
                                <li><span>BHK:</span> 3 BHK</li>
                                <li><span>Carpet Area:</span> 1800 Sqft</li>

                            </ul>
                        </div>
                    </div>
                    <div className="owner-details">
                        <div className="heading">
                            <h3>Owner Details</h3>
                        </div>
                        <div className="owner-info">
                            <ul>
                                <li><span>address:</span> 0x506AEAc5e343F007C231091323b276FA989e9C61</li>
                                <li><span>Phone:</span> 1234567890</li>

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
