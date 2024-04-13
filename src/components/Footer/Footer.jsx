import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>

            <footer className="footer row row-cols-5 py-5 border-top">
                <div className="col">
                    <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                        Logo Comes Here
                        <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
                    </a>
                    <p className="text-muted">© 2021</p>
                </div>

                <div className="col">

                </div>

                <div className="col">

                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Company</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">All Products</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Locations Map</a></li>
                    </ul>
                </div>

                <div className="col">

                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Services</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Order tracking</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Wish List</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms & Conditions</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Promotional Offers</a></li>
                    </ul>
                </div>

                <div className="col">

                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Customer Care</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Login</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">My account</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact us</a></li>
                    </ul>
                </div>

            </footer>
            <div class="footer-bottom d-flex">
                <div class="container">

                    <p class="copyright">
                        &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
                    </p>

                </div>
            </div>



        </>
    )
}

export default Footer
