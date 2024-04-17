import React from 'react'
import './FeaturedSpace.css'
import Displaycards from '../Displaycards/Displaycard'
const properties = [1, 2, 3, 4, 5, 6]
const FeaturedSpace = () => {
    return (
        <div className='container container-fluid' >
            <div className="head-text-featurespace d-flex" style={{ "justify-content": "center" }} >
                Featured Space
            </div>
            <div className="properties d-flex">
                <Displaycards />
                <Displaycards />
                <Displaycards />
                <Displaycards />
                <Displaycards />
                <Displaycards />



            </div>
        </div>
    )
}

export default FeaturedSpace
