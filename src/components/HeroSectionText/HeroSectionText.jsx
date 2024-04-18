import React from 'react'
import './HeroSectionText.css'

const HeroSectionText = () => {
    return (
        <div className="hero-text d-flex justify-content-around">
            <div className="section-text-1">
                Helping you <br />
                to find the <span>Perfect Home</span>
            </div>
            <div className='section-text-2'>
                Explore a curated selection of urban properties tailored to your lifestyle. Begin your search today and embark on the journey to urban living at its finest.
                <div className="section-buttons d-flex justify-content-between">
                    <button type="button" className='btn btn-1'>Explore More</button>
                    <button type="button" className='btn btn-2'>Watch Demo</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSectionText
