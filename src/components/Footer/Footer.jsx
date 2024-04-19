import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="footer-div " >
                <footer className="footer row row-cols-5 py-5 border-top" >
                    <div className="col">
                        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            Logo Comes Here
                            <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
                        </a>
                        <p className="">© 2024</p>
                    </div>

                    <div className="col">

                    </div>

                    <div className="col">

                        <ul className="nav flex-column" style={{ "color": "white" }}>
                            <li className="nav-item mb-2"><a href="#" className="nav-link  " style={{ color: "white" }}>Company</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link  " style={{ color: "white" }}>About</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link  " style={{ color: "white" }}>Blog</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link  " style={{ color: "white" }}>All Products</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link  " style={{ color: "white" }}>Locations Map</a></li>
                        </ul>
                    </div>

                    <div className="col">

                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link  " style={{ color: "white" }}>Services</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link  " style={{ color: "white" }}>Order tracking</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link  " style={{ color: "white" }}>Wish List</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link  " style={{ color: "white" }}>Terms & Conditions</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link  " style={{ color: "white" }}>Promotional Offers</a></li>
                        </ul>
                    </div>

                    <div className="col">

                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link  " style={{ color: "white" }}>Customer Care</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link  " style={{ color: "white" }}>Login</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link  " style={{ color: "white" }}>My account</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link  " style={{ color: "white" }}>FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link  " style={{ color: "white" }}>Contact us</a></li>
                        </ul>
                    </div>

                </footer>
                <div class="footer-bottom d-flex">
                    <div class="container">

                        <p class="copyright">
                            &copy; 2024  All Rights Reserved
                        </p>

                    </div>
                </div>
            </div>




        </>
    )
}

export default Footer
