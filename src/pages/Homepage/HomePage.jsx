<<<<<<< HEAD
import React from 'react'
import './HomePage.css'
import HeroSectionText from '../../components/HeroSectionText/HeroSectionText'
import FeaturedSpace from '../../components/FeaturedSpaces/FeaturedSpace'
import HouseCarousel from '../../components/HouseCarousel/HouseCarousel'
import WhyUs from '../../assets/WhyUs.png'
import Procedure from '../../assets/procedure.png'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
const HomePage = () => {
    return (
        <>
            <Navbar />
            <HeroSectionText />
            <HouseCarousel />
            <FeaturedSpace />
            <div className="whyus d-flex">
                <img src={WhyUs} alt="" />
            </div>
            <div className="procedure d-flex">
                <img src={Procedure} alt="" />
            </div>
            <Footer />
        </>
    )
}

export default HomePage
=======
import React from 'react'
import './HomePage.css'
import HeroSectionText from '../../components/HeroSectionText/HeroSectionText'
import FeaturedSpace from '../../components/FeaturedSpaces/FeaturedSpace'
import HouseCarousel from '../../components/HouseCarousel/HouseCarousel'
import WhyUs from '../../assets/WhyUs.png'
import Procedure from '../../assets/procedure.png'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
const HomePage = () => {
    return (
        <>
            <Navbar />
            <HeroSectionText />
            <HouseCarousel />
            <FeaturedSpace />
            <div className="whyus d-flex">
                <img src={WhyUs} alt="" />
            </div>
            <div className="procedure d-flex">
                <img src={Procedure} alt="" />
            </div>
            <Footer />
        </>
    )
}

export default HomePage
>>>>>>> 57ec83fdd9dd2a4e74887e10a54e4dde9b51e438
